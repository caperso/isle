import React from 'react';
import styled from 'styled-components';

export const SiteRecord = () => {
    return (
        <SiteInfo>
            <p>
                <span role="img" aria-label="emoji">
                    ✨ Built with React & supported by Node on Nginx. &nbsp; ✨
                </span>
                <span role="img" aria-label="emoji"></span>
            </p>
            <br />
            <p>
                <span role="img" aria-label="emoji">
                    ❤️ Written by Caper with passion and&nbsp; ❤️
                </span>
            </p>
            <br />
            <Anchor href="http://www.beian.miit.gov.cn/" aria-label="link and check for this site">
                <span role="img" aria-label="emoji">
                    📦 IPC证: 浙ICP备19047176号 📦
                </span>
            </Anchor>
            <br />
        </SiteInfo>
    );
};

const SiteInfo = styled.div`
    font-weight: 400;
    display: flex;
    flex-flow: column;
    padding: 2rem;
    padding-top: 6rem;
    font-size: 10px;
    color: white;
    & > p:hover {
        color: goldenrod;
    }
`;

const Anchor = styled.a`
    color: white;
    &:hover {
        color: goldenrod;
    }
`;
