// Chakra imports
import {
  Button,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { getData, postData } from "api/axios-call";
import axios from "axios";




// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import React from "react";
import { useState } from 'react';


const MiniStatistics = ({ title, amount, percentage, icon }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

 





  async function checkout(TicketAmount) {
    console.log("Fire", TicketAmount);

    try {

      const requestData = JSON.stringify({
        username: "Fire",
        password: "Fire123456"
      });
      const headers = {
        'Content-Type': 'application/json',
      };

      try {

        const response = await postData(
          "https://firesvlk.online:8443/api/auth/signin",
          requestData,
          headers
        );
        console.log("response 1", response);
        console.log("response 1", response.status);

        if (response.status === 200) {
          const headers1 = {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+response.data.accessToken
          };
    
       const response1 = await getData(
          "https://firesvlk.online:8443/square/1000",
          headers1
        );
        console.log("Fire1", headers1);
        console.log("Fire", response1);
        if(response1.status===200){
          // window.open(response1.data.payment_link.long_url);
          window.location.href = response1.data.payment_link.long_url;
        }
        }


      } catch (error) {
        console.log("error", error);
  
      }
    
    } catch (error) {
      console.log(error);
      // return error;
      throw error;
    }
  }

  return (
    <Card minH='150px'>
      <Flex flexDirection='column' align='center' justify='center' w='100%' >
        <CardBody>
          <Flex flexDirection='row' align='center' justify='center' w='100%'>
            <Stat me='auto'>
              <StatLabel
                fontSize='sm'
                color='gray.400'
                fontWeight='bold'
                pb='.1rem'>
                {title}
              </StatLabel>
              <Flex>
                <StatNumber fontSize='lg' color={textColor}>
                  {amount}
                </StatNumber>
                {/* <StatHelpText
                alignSelf='flex-end'
                justifySelf='flex-end'
                m='0px'
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight='bold'
                ps='3px'
                fontSize='md'>
                {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
              </StatHelpText> */}
              </Flex>

            </Stat>
            <IconBox as='box' h={"45px"} w={"45px"} bg={iconTeal}>
              {icon}
            </IconBox>

          </Flex>

        </CardBody>
        <br></br>

        <Flex align='center' justify='center' >
          <Button color="white" backgroundColor="teal.300" _hover={{ color: "white", backgroundColor: "teal.900" }} w="150px" onClick={() => checkout(amount)}>Purchase</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default MiniStatistics;
