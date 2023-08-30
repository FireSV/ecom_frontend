// Chakra imports
import { ChakraProvider, Flex, Portal, SimpleGrid, useDisclosure } from '@chakra-ui/react';
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
import MainPanel from 'components/Layout/MainPanel';
import FixedPlugin from 'components/FixedPlugin/FixedPlugin';
import PanelContent from 'components/Layout/PanelContent';
import PanelContainer from 'components/Layout/PanelContainer';
import MiniStatistics from 'views/Dashboard/Dashboard/components/MiniStatistics';
import { WalletIcon } from 'components/Icons/Icons';
import TicketsView from 'views/Tickets/TicketsView';
// import FixedPlugin from '../components/FixedPlugin/FixedPlugin';
// Custom components

// import PanelContainer from '../components/Layout/PanelContainer';
// import PanelContent from '../components/Layout/PanelContent';
export default function Tickets(props) {
	const { ...rest } = props;
	const [sidebarVariant, setSidebarVariant] = useState('transparent');
	const [fixed, setFixed] = useState(false);
	const getRoute = () => {
		return window.location.pathname !== '/admin/full-screen-maps';
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



				<PanelContent>
					<PanelContainer>
						<Switch>
							{

								<TicketsView></TicketsView>

								// <Route path={routes[0].layout + routes[0].path} component={routes[0].component} key={routes[0].key} />

							}
						</Switch>
					</PanelContainer>
				</PanelContent>

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
