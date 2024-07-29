import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    //const navigate = useNavigate();

    const handleFinishClick = () => {
        setOpenConfirmDialog(true);
    };

    const handleConfirmYes = () => {
        setOpenConfirmDialog(false);
        setLoading(true);

        // Simulate a payment process with a timeout
        setTimeout(() => {
            setLoading(false);
            setOpenSuccessDialog(true);
        }, 3000); // 3 seconds delay
    };

    const handleConfirmNo = () => {
        setOpenConfirmDialog(false);
        // No action needed; user stays on the payment step
    };

    const handleSuccessClose = () => {
        setOpenSuccessDialog(false);
        //navigate('/home');
    };

    return (
        <div>
            <Typography variant="h4">Payment Page</Typography>
            <Button variant="contained" color="primary" onClick={handleFinishClick}>
                Finish
            </Button>

            {/* Payment Confirmation Dialog */}
            <Dialog
                open={openConfirmDialog}
                onClose={() => setOpenConfirmDialog(false)}
            >
                <DialogTitle>Payment Confirmation</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to proceed with the payment?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmNo} color="primary">
                        No
                    </Button>
                    <Button onClick={handleConfirmYes} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Payment Success Dialog */}
            <Dialog
                open={openSuccessDialog}
                onClose={handleSuccessClose}
            >
                <DialogTitle>Payment Success</DialogTitle>
                <DialogContent>
                    <Typography>Your payment was successful!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSuccessClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Loading Indicator (Optional) */}
            {loading && <div>Processing payment...</div>}
        </div>
    );
};

export default PaymentPage;
