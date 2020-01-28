import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Main from "./Main";

const styles = theme => ({
	"@global": {
		body: {
			backgroundImage: "url('http://www.soaringww.com/wp-content/uploads/2019/07/AI-More-than-Human-Barbican-Centre-%E2%80%93-16-May-26-August-2019.-What-a-Loving-and-Beautiful-World-%C2%A9-teamLab-1024x576.jpg')",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100%"
		},
		html: {
			height: "100%"
		},
		"#componentWithId": {
			height: "100%"
		}
	}
});

const App = () => {
	return (
		<Fragment>
			<CssBaseline />
			<Main />
		</Fragment>
	);
};

export default withStyles(styles)(App);