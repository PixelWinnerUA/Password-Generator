import React, {useEffect, useRef, useState} from 'react';
import '../styles/App.scss';
import Slider from '@mui/material/Slider';
import {Button, Switch} from "@mui/material";
import {generatePassword} from "./passwordGenerator";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const marks = [
        {
            value: 1,
            label: "1"
        },
        {
            value: 8,
            label: "8"
        },
        {
            value: 16,
            label: "16"
        },
        {
            value: 24,
            label: "24"
        },
        {
            value: 32,
            label: "32"
        },
    ]; //Slider marks
    const valueText = (value: number): string => `${value}`; //Slider marks text on hover

    const UpperCase = useRef<HTMLInputElement>(null);
    const LowerCase = useRef<HTMLInputElement>(null);
    const Numbers = useRef<HTMLInputElement>(null);
    const Symbols = useRef<HTMLInputElement>(null);

    //test

    const [values, setValues] = useState({
        Length: 8,
        UpperCase: false,
        LowerCase: true,
        Numbers: true,
        Symbols: false,
        Password: "Your Password will be here",
        CopyState: false,
    })

    const changeLocalState = (prop: string) => (value: boolean | string) => {
        setValues({...values, [prop]: value})
    }

    const copyAndToast = (password: string) => {
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(password).then(() => toast.success("Copied!", {toastId: "success"})).catch(() => toast.error("Error, try again!"))
        } else {
            document.execCommand('copy', true, password);
            toast.success("Copied!", {toastId: "success"})
        }
    }

    useEffect(() => {
        let totalChecked = [UpperCase.current, LowerCase.current, Numbers.current, Symbols.current].filter(element => element?.checked);
        totalChecked.forEach(element => {
            if (totalChecked.length === 1) {
                element?.parentElement?.classList.add("Mui-disabled")
            } else {
                element?.parentElement?.classList.remove("Mui-disabled")
            }
        })
    }, [values.UpperCase, values.LowerCase, values.Numbers, values.Symbols])

    return (
        <div className="App">
            <div className="Content">
                <h1>Password Generator</h1>
                <div className="result" onClick={() => copyAndToast(values.Password)}>
                    <span>{values.Password}</span>
                    <span className="ClipBoard-Text">Click to copy</span>
                </div>
                <div className="item">
                    <Slider
                        sx={{width: 230}}
                        value={values.Length}
                        getAriaValueText={valueText}
                        step={1}
                        min={1}
                        max={32}
                        valueLabelDisplay="auto"
                        marks={marks}
                        onChange={e => changeLocalState("Length")((e.target as HTMLInputElement).value)}
                    />
                </div>
                <div className="item">
                    <span>Include Uppercase</span>
                    <Switch checked={values.UpperCase}
                            inputRef={UpperCase}
                            onChange={e => changeLocalState("UpperCase")((e.target as HTMLInputElement).checked)}/>
                </div>
                <div className="item">
                    <span>Include Lowercase</span>
                    <Switch checked={values.LowerCase}
                            inputRef={LowerCase}
                            onChange={e => changeLocalState("LowerCase")((e.target as HTMLInputElement).checked)}/>
                </div>
                <div className="item">
                    <span>Include Numbers</span>
                    <Switch checked={values.Numbers}
                            inputRef={Numbers}
                            onChange={e => changeLocalState("Numbers")((e.target as HTMLInputElement).checked)}/>
                </div>
                <div className="item">
                    <span>Include Symbols</span>
                    <Switch checked={values.Symbols}
                            inputRef={Symbols}
                            onChange={e => changeLocalState("Symbols")((e.target as HTMLInputElement).checked)}/>
                </div>

                <Button variant="contained"
                        onClick={() => changeLocalState("Password")(generatePassword(values.Length, values.LowerCase, values.UpperCase, values.Numbers, values.Symbols))}>Generate
                    Password</Button>
            </div>
            <ToastContainer
                position="top-left"
                theme="dark"
                autoClose={2000}
                limit={2}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
