import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonTertiary } from '../../components/Button';
import { Store } from '../../store';
import { withTranslation } from 'react-i18next';

const OnBoardingPageContainer = ({ t, children }) => {
	const {
		state: {
			ui: { themeIsDark },
			// wallet: { networkName },
		},
	} = useContext(Store);
	return (
		<PageContainer>
			<Header>
				<HeaderBlock>
					<Logo src={`/images/mintr-logo-${themeIsDark ? 'light' : 'dark'}.svg`} />
					{/* <Network>{networkName}</Network> */}
				</HeaderBlock>
				<HeaderBlock>
					<ButtonTertiary as="a" href="https://help.synthetix.io/hc/en-us" target="_blank">
						{t('button.havingTrouble')}
					</ButtonTertiary>
					<ButtonTertiary
						as="a"
						href="https://www.synthetix.io/uploads/synthetix_litepaper.pdf"
						target="_blank"
					>
						{t('button.whatIsSynthetix')}
					</ButtonTertiary>
				</HeaderBlock>
			</Header>
			{children}
		</PageContainer>
	);
};

const PageContainer = styled.div`
	padding: 42px;
	height: 100vh;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const HeaderBlock = styled.div`
	display: flex;
	& :first-child:not(:last-child) {
		margin-right: 10px;
	}
`;

const Logo = styled.img`
	width: 120px;
	margin-right: 18px;
`;

// const Network = styled.div`
//   margin-top: 4px;
//   background-color: ${props => props.theme.colorStyles.buttonTertiaryBgFocus};
//   display: flex;
//   align-items: center;
//   text-transform: uppercase;
//   color: ${props => props.theme.colorStyles.themeToggleFontColor};
//   padding: 5px 10px;
//   font-size: 14px;
// `;

export default withTranslation()(OnBoardingPageContainer);
