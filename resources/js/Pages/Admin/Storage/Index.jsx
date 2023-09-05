import ShippingCard from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import {
    Autocomplete,
    Avatar,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";
import TransitionsModal from "@/Components/Modal";
import ReusableModal from "@/Components/Modal";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import BasicTextFields from "@/Components/InputField";
import CustomizedSnackbars from "@/Components/CustomizeSnackBar";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "@inertiajs/react";
import VerticalTabs from "@/Components/TabPanel";

export default function Index({ auth, mustVerifyEmail, status }) {
    const columns = ["Product Name", "Product ID", "Status"];

    const data = [
        ["Lenovo laptop", "ABC1234", "Active"],
        ["Lenovo PC", "ABC4321", "Pending"],
    ];

    const data1 = [
        ["Lenovo laasdfasdfptop", "ABC1234", "Active"],
        ["Lenovo PC", "ABC4321", "Pending"],
    ];

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const breadcrumbItems = [
        {
            icon: (
                <Link href={route("dashboard")}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
            ),
            text: <Link href={route("dashboard")}>Home</Link>,
            url: (
                <Link href={route("dashboard")}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
            ),
        },
        {
            icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "Storage",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    // Define an array of tab objects with label and content properties
    const tabs = [
        {
            label: "Desktop",
            content: (
                <div className="">
                    <Card>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </Card>
                </div>
            ),
        },
        {
            label: "Laptops",
            content: (
                <div className="">
                    <Card>
                        <MUIDataTable
                            data={data1}
                            columns={columns}
                            options={options}
                        />
                    </Card>
                </div>
            ),
        },
        // Add more tabs as needed
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            {/* Pass the tabs array to the VerticalTabs component */}
            <VerticalTabs tabs={tabs} />
        </MainLayout>
    );
}
