import { Flex, SimpleGrid } from "@chakra-ui/react";
import { WalletIcon } from "components/Icons/Icons";
import MiniStatistics from "./MiniStatistics";


export default function TicketsView() {
    return (<Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
            <MiniStatistics
                title={"Ticket 1"}
                amount={"1000"}
                percentage={55}
                icon={<WalletIcon h={"24px"} w={"24px"} />}
            />
            <MiniStatistics
                title={"Ticket 2"}
                amount={"2000"}
                percentage={55}
                icon={<WalletIcon h={"24px"} w={"24px"} />}
            />
            <MiniStatistics
                title={"Ticket 3"}
                amount={"3000"}
                percentage={55}
                icon={<WalletIcon h={"24px"} w={"24px"} />}
            />
            <MiniStatistics
                title={"Ticket 4"}
                amount={"4000"}
                percentage={55}
                icon={<WalletIcon h={"24px"} w={"24px"} />}
            />
            <MiniStatistics
                title={"Ticket 5"}
                amount={"5000"}
                percentage={55}
                icon={<WalletIcon h={"24px"} w={"24px"} />}
            />
        </SimpleGrid>
    </Flex>
    );
}