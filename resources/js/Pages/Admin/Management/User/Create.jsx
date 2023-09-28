import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomSelect from "@/Components/CustomSelect";
import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import AddSharpIcon from "@mui/icons-material/AddSharp";

function Create() {
    // test sample

    const [region, setRegion] = React.useState("");

    const regionChange = (event) => {
        setRegion(event.target.value);
    };

    const regions = [
        { label: "None", value: "" },
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
    ];

    // test

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    // department sample

    const [department, setDepartment] = React.useState("");

    const DepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const departmentoption = [
        { label: "None", value: "" },
        { label: "IT", value: 10 },
        { label: "Computer-Science", value: 20 },
        { label: "IS", value: 30 },
    ];

    // add alertmessage in form submit

    const [showAlert, setShowAlert] = useState(true);

    // Function to hide the alert after a specified duration (in milliseconds)
    const hideAlertAfterDuration = (duration) => {
        setTimeout(() => {
            setShowAlert(false);
        }, duration);
    };

    // Call the hideAlertAfterDuration function when showAlert becomes true
    useEffect(() => {
        if (showAlert) {
            hideAlertAfterDuration(5000); // Auto-hide after 3 seconds
        }
    }, [showAlert]);
    // submmit to store

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("save"));

        // Show the alert
        setShowAlert(true);

        // Reset the form or perform other actions
        reset();
    };

    return (
        <div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                    startIcon={<AddSharpIcon />}
                    className="w-full lg:w-36"
                >
                    Add User
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit} className="grid gap-2">
                        <Stack sx={{ width: "100%" }} spacing={2}>
                            {showAlert && (
                                <Alert severity="success" color="info">
                                    The User is successfully Added — check it
                                    out!
                                </Alert>
                            )}
                        </Stack>
                        <DialogTitle>
                            Are you sure want to add your account?
                        </DialogTitle>
                        <DialogContent>
                            <div className="grid grid-col gap-7 px-2">
                                <div className="grid grid-col gap-5">
                                    <TextField
                                        label="Name"
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="block w-full mt-1"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.name}
                                        error={!!errors.name}
                                        size="small"
                                    />

                                    <TextField
                                        label="Email address"
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.email}
                                        error={!!errors.email}
                                        size="small"
                                    />

                                    <TextField
                                        label="Password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.password}
                                        error={!!errors.password}
                                        size="small"
                                    />

                                    <TextField
                                        label="Confirm Password"
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                        fullWidth
                                        helperText={
                                            errors.password_confirmation
                                        }
                                        error={!!errors.password_confirmation}
                                        size="small"
                                    />
                                    {/* <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        name="lastName"
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Middle Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-basic"
                                        label="Email Address"
                                        variant="outlined"
                                        name="email"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                </div>
                                <div className="grid grid-col lg:grid-cols-2 md:grid-cols-2 gap-2">
                                    <TextField
                                        id="outlined-basic"
                                        label="Contact Number"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Contact Number"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                </div>

                                <div className="grid grid-col md:grid-cols-3 lg:grid-cols-3 gap-2">
                                    <CustomSelect
                                        label="Region"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                    <CustomSelect
                                        label="Province/City"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                    <CustomSelect
                                        label="City"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                </div>
                                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    <CustomSelect
                                        label="Barangay"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                    <CustomSelect
                                        label="Zip Code"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                </div>
                                <div>
                                    <CustomSelect
                                        label="Department"
                                        value={department}
                                        onChange={DepartmentChange}
                                        options={departmentoption}
                                    />
                                </div>

                                <div className="grid grid-col gap-5">
                                    <TextField
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Confirm Password"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    /> */}
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={processing}
                            >
                                Add Account
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </div>
    );
}

export default Create;
