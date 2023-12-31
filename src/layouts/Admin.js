// Chakra imports
import { ChakraProvider, Portal, useDisclosure } from '@chakra-ui/react';
import Configurator from 'components/Configurator/Configurator';
import Footer from 'components/Footer/Footer.js';
// Layout components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'routes.js';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// Custom Chakra theme
import theme from 'theme/theme.js';
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';
// Custom components
import MainPanel from '../components/Layout/MainPanel';
import PanelContainer from '../components/Layout/PanelContainer';
import PanelContent from '../components/Layout/PanelContent';
export default function Dashboard(props) {
	const { ...rest } = props;
	const [sidebarVariant, setSidebarVariant] = useState('transparent');
	const [fixed, setFixed] = useState(false);
	const getRoute = () => {
		return window.location.pathname !== '/admin/full-screen-maps';
	};
	const getActiveRoute = (routes) => {
		let activeRoute = 'Default Brand Text';
		try {
			for (let i = 0; i < routes.length; i++) {
				if (routes[i].name === "Dashboard") { return getActiveRoute(routes[i].views); }
			}
			return activeRoute;	
		} catch (error) {
			console.log("Fire", error);
		}
	};

	
	const getActiveNavbar = (routes) => {
		console.log("1routes",routes);
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].category) {
				let categoryActiveNavbar = getActiveNavbar(routes[i].views);
				if (categoryActiveNavbar !== activeNavbar) {
					return categoryActiveNavbar;
				}
			} else {
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
					if (routes[i].secondaryNavbar) {
						return routes[i].secondaryNavbar;
					}
				}
			}
		}
		return activeNavbar;
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	document.documentElement.dir = 'ltr';
	// Chakra Color Mode
	return (
		<ChakraProvider theme={theme} resetCss={false}>
			<Sidebar
				routes={routes}
				logoText={'FIRE UI DASHBOARD'}
				display='none'
				sidebarVariant={sidebarVariant}
				{...rest}
			/>
			<MainPanel
				w={{
					base: '100%',
					xl: 'calc(100% - 275px)'
				}}>
				<Portal>
					<AdminNavbar
						onOpen={onOpen}
						logoText={'FIRE UI DASHBOARD'}
						// brandText={getActiveRoute(routes)}
						// secondary={getActiveNavbar(routes)}
						fixed={fixed}
						{...rest}
					/>
				</Portal>
			

				{getRoute() ? (
					<PanelContent>
						<PanelContainer>
							<Switch>
							{<Route path={routes[0].layout + routes[0].path} component={routes[0].component} key={routes[0].key} />}
							</Switch>
						</PanelContainer>
					</PanelContent>
				) : null}
				<Footer />

			
				<Footer />
				<Portal>
					<FixedPlugin secondary={routes[0]} fixed={fixed} onOpen={onOpen} />
				</Portal>
				<Configurator
					secondary={routes[0]}
					isOpen={isOpen}
					onClose={onClose}
					isChecked={fixed}
					onSwitch={(value) => {
						setFixed(value);
					}}
					onOpaque={() => setSidebarVariant('opaque')}
					onTransparent={() => setSidebarVariant('transparent')}
				/>
			</MainPanel>
		</ChakraProvider>
	);
}
