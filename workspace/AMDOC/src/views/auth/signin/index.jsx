/* eslint-disable indent */
import React, { useEffect } from 'react';
import { ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { SocialLogin } from '@/components/common';
import { CustomInput } from '@/components/formik';
import { FORGOT_PASSWORD, SIGNUP } from '@/constants/routes';
import { Field, Form, Formik } from 'formik';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '@/redux/actions/authActions';
import { setAuthenticating, setAuthStatus } from '@/redux/actions/miscActions';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';



const SignIn = ({ history }) => {
  const { t } = useTranslation();

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('email_validation'))
      .required(t('email_required')),
    password: Yup.string()
      .required(t('password_required'))
  });



  const { authStatus, isAuthenticating } = useSelector((state) => ({
    authStatus: state.app.authStatus,
    isAuthenticating: state.app.isAuthenticating
  }));

  const dispatch = useDispatch();

  useScrollTop();
  useDocumentTitle(t('signin_title'));

  useEffect(() => () => {
    dispatch(setAuthStatus(null));
    dispatch(setAuthenticating(false));
  }, []);

  const onSignUp = () => history.push(SIGNUP);

  const onSubmitForm = (form) => {
    dispatch(signIn(form.email, form.password));
  };

  const onClickLink = (e) => {
    if (isAuthenticating) e.preventDefault();
  };

  return (
    <div className="auth-content">
      {authStatus?.success && (
        <div className="loader">
          <h3 className="toast-success auth-success">
            {authStatus.message}
            <LoadingOutlined />
          </h3>
        </div>
      )}
      {!authStatus?.success && (
        <>
          {authStatus?.message && (
            <h5 className="text-center toast-error">
              {authStatus?.message}
            </h5>
          )}
          <div className={`auth ${authStatus?.message && (!authStatus?.success && 'input-error')}`}>
            <div className="auth-main">
              <h3>{t('signin_heading')}</h3>
              <br />
              <div className="auth-wrapper">
                <Formik
                  initialValues={{
                    email: 'swapna66677777@gccccc.com',
                    password: '123456'
                  }}
                  validateOnChange
                  validationSchema={SignInSchema}
                  onSubmit={onSubmitForm}
                >
                  {() => (
                    <Form>
                      <div className="auth-field">
                        <Field
                          disabled={isAuthenticating}
                          name="email"
                          type="email"
                          label={t('email_label')}
                          placeholder={t('email_placeholder')}
                          component={CustomInput}
                        />
                      </div>
                      <div className="auth-field">
                        <Field
                          disabled={isAuthenticating}
                          name="password"
                          type="password"
                          label={t('password_label')}
                          placeholder={t('password_placeholder')}
                          component={CustomInput}
                        />
                      </div>
                      <br />
                      <div className="auth-field auth-action">
                        <Link
                          onClick={onClickLink}
                          style={{ textDecoration: 'underline' }}
                          to={FORGOT_PASSWORD}
                        >
                          <span>{t('forgot_password')}</span>
                        </Link>
                        <button
                          className="button auth-button"
                          disabled={isAuthenticating}
                          type="submit"
                        >
                          {isAuthenticating ? t('signing_in') : t('sign_in')}
                          &nbsp;
                          {isAuthenticating ? <LoadingOutlined /> : <ArrowRightOutlined />}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="auth-divider">
              <h6>{t('or')}</h6>
            </div>
            <SocialLogin isLoading={isAuthenticating} />
          </div>
          <div className="auth-message">
            <span className="auth-info">
              <strong>{t('dont_have_account')}</strong>
            </span>
            <button
              className="button button-small button-border button-border-gray button-icon"
              disabled={isAuthenticating}
              onClick={onSignUp}
              type="button"
            >
              {t('sign_up')}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default SignIn;
