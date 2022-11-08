import {
  GitHubLogoIcon,
  HomeIcon,
  MixIcon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";
import styled from "../../theme";
import { NavbarConfig } from "../lib/config";
import GhostButton from "./Button";
import ColorModeToggle from "./ColorModeToggle";
import StyledSeparator from "./Separator";

const icons = {
  HomeIcon: HomeIcon,
  MixIcon: MixIcon,
  GithubIcon: GitHubLogoIcon,
  PersonIcon: PersonIcon,
  TwitterIcon: TwitterLogoIcon,
};

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  variants: {
    spaced: {
      true: {
        marginBottom: "3rem",
      },
    },
  },
});

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Navbar: React.FC<{ config: NavbarConfig; page?: string }> = ({
  config,
  page,
}) => {
  return (
    <Tooltip.Provider>
      <Nav spaced={config.spacing}>
        <Flex>
          {config.items.map((item) => {
            const id = item.href || item.type;
            let Icon;
            if (item.type === "separator") {
              return <StyledSeparator key={id} orientation="vertical" />;
            }
            if (item.icon) {
              Icon = icons[item.icon];
            }

            return (
              <GhostButton
                key={item.href}
                tooltip={item.tooltip}
                active={page === item.href}
                variant="text"
                href={item.href}
                gradients={item.gradient}
                tooltipGradient={item.tooltipGradient}
                spaced
              >
                {Icon && <Icon />}
              </GhostButton>
            );
          })}
        </Flex>

        {config.colorModeToggle && (
          <ColorModeToggle
            tooltip={config.colorModeToggle.tooltip}
            gradient={!!config.colorModeToggle.gradient}
            tooltipGradient={!!config.colorModeToggle.tooltipGradient}
            variant="text"
          />
        )}
      </Nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
