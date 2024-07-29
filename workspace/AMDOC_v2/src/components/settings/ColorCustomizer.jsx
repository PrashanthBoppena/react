import React, { useState } from 'react';

const ColorCustomizer = ({ onUpdateColors }) => {
    const [colors, setColors] = useState({
        navBg: '#f8f8f8',
        navBgScrolled: '#fff',
        backgroundColor: '#fff',
        paragraphColor: '#070000',
        headingColor: '#1a1a1a',
        borderColor: '#e1e1e1',
        buttonColor: '#3b9620',
    });

    const handleColorChange = (color, value) => {
        setColors({ ...colors, [color]: value });
    };

    const handleUpdateColors = () => {
        onUpdateColors(colors); // Pass updated colors up to parent component

        // Update CSS variables in the <style> tag in <head>
        const root = document.documentElement;
        root.style.setProperty('--nav-bg', colors.navBg);
        root.style.setProperty('--nav-bg-scrolled', colors.navBgScrolled);
        root.style.setProperty('--nav-background-color', colors.backgroundColor);
        root.style.setProperty('--paragraph-color', colors.paragraphColor);
        root.style.setProperty('--heading-color', colors.headingColor);
        root.style.setProperty('--border-color', colors.borderColor);
        root.style.setProperty('--button-color', colors.buttonColor);
        // Update more CSS variables as needed
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>Customize Colors</h2>
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <td>Navigation Background:</td>
                        <td>
                            <input
                                type="color"
                                value={colors.navBg}
                                onChange={(e) => handleColorChange('navBg', e.target.value)}
                            />
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: colors.navBg,
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Scrolled Navigation Background:</td>
                        <td>
                            <input
                                type="color"
                                value={colors.navBgScrolled}
                                onChange={(e) => handleColorChange('navBgScrolled', e.target.value)}
                            />
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: colors.navBgScrolled,
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Background Color:</td>
                        <td>
                            <input
                                type="color"
                                value={colors.backgroundColor}
                                onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
                            />
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: colors.backgroundColor,
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Paragraph Color:</td>
                        <td>
                            <input
                                type="color"
                                value={colors.paragraphColor}
                                onChange={(e) => handleColorChange('paragraphColor', e.target.value)}
                            />
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: colors.paragraphColor,
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Heading Color:</td>
                        <td>
                            <input
                                type="color"
                                value={colors.headingColor}
                                onChange={(e) => handleColorChange('headingColor', e.target.value)}
                            />
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: colors.headingColor,
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Border Color:</td>
                        <td>
                            <input
                                type="color"
                                value={colors.borderColor}
                                onChange={(e) => handleColorChange('borderColor', e.target.value)}
                            />
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: colors.borderColor,
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Button Color:</td>
                        <td>
                            <input
                                type="color"
                                value={colors.buttonColor}
                                onChange={(e) => handleColorChange('buttonColor', e.target.value)}
                            />
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: colors.buttonColor,
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={handleUpdateColors} style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Update Colors
                </button>
            </div>
        </div>
    );
};

export default ColorCustomizer;
