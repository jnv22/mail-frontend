/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

import React, { useState } from "react";

import Navigation from "../components/Navigation";
import EmailList from "../components/EmailList";
import { MenuButton } from "theme-ui";

import data from "../data/emails.json";

const Home: React.FC<{}> = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <MenuButton
        sx={{
          width: "55px",
        }}
        mb={0}
        onClick={() => setShowNavigation(!showNavigation)}
      />
      <Flex>
        {showNavigation && (
          <div
          >
            <Navigation data={data} />
          </div>
        )}

        <div
          sx={{
            flex: 1,
            ml: 1,
          }}
        >
          <EmailList
            data={data}
          />
        </div>
      </Flex>
    </Flex>
  );
};

export default Home;
