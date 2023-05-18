import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material";

const NavContainer = styled(Toolbar)`
	height: 90px;
	background-color: white;
`;

const Navbar = () => {
	return (
		<div className="App">
			<AppBar style={{ boxShadow: "none" }}>
				<NavContainer>
					<h2 style={{ color: "#e74b16", marginLeft: "80vh" }}>
						ARE YOU DISILLUSIONED?
					</h2>
				</NavContainer>
			</AppBar>
		</div>
	);
};
export default Navbar;
