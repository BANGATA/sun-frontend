import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useTimeout,
} from "@chakra-ui/react";
import "./Login.scss";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const [token, setToken] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);
  const handlePasswordChange = (e: any) => setPass(e.target.value);

  const handleSubmit = async () => {
    const tempData = { email: input, password: pass };
    await axios.post("https://reqres.in/api/login", tempData).then((res) => {
      setToken(res.data.token);
      console.log(res.data.token);
      window.location.href = "https://radityaherkristito.com";
    });
  };

  const isError = input === "";
  const isNotEqual = input === "eve.holt@reqres.in";
  return (
    <Flex
      minH={"100vh"}
      w={"100vw"}
      align={"center"}
      justify={"center"}
      bgColor={"white"}
      flexDir={"column"}
    >
      <Flex
        h={400}
        w={300}
        borderRadius={"8px"}
        border={"1px solid black"}
        align={"center"}
        justify={"center"}
        p={5}
        flexDir={"column"}
      >
        <Text fontSize={30} mb={5}>
          Login
        </Text>
        <FormControl isInvalid={isError || !isNotEqual}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={input}
            onChange={handleInputChange}
            name="email"
          />
          {!isError ? (
            <>
              {isNotEqual ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  Email should be eve.holt@reqres.in
                </FormErrorMessage>
              )}
            </>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl mb={5} mt={3}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={pass}
            onChange={handlePasswordChange}
            name="password"
          />
          <FormHelperText>We never store your data.</FormHelperText>
        </FormControl>
        <Button
          onClick={handleSubmit}
          isDisabled={
            input === "" || input !== "eve.holt@reqres.in" || pass === ""
          }
          mb={3}
        >
          Login
        </Button>
        Current Token: {token}
      </Flex>
    </Flex>
  );
};

export default Login;
