import { render, screen} from "@testing-library/react";
import ReserveTable from "./ReserveTable";
import { Router } from "react-router";

test ('Render the ReserveTable heading' , () => {
    render (
     <Router>
    <ReserveTable />
    </Router>
    );

    const headingElement = screen.getByText("Little Lemon - Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});