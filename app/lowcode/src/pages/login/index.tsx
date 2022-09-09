import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Center,
  Group,
  Button,
  Divider,
  Container,
} from "@mantine/core";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons";
import useStyles from "./index.css";

export default function AuthenticationTitle() {
  const { classes } = useStyles();

  return (
    <Center className={classes.login}>
      <Container sx={{ width: "430px" }}>
        <Title
          align="center"
          sx={(theme) => ({
            fontWeight: 900,
          })}
        >
          😊 Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          还没有账户吗，创建帐户 ？
          <Anchor<"a">
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="账号" placeholder="请输入您的账号信息" required />
          <PasswordInput
            label="密码"
            placeholder="请输入账号密码"
            required
            mt="md"
          />
          <Group position="apart" mt="md">
            <Checkbox label="记住我" />
            <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              忘记密码？
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            立即出发
          </Button>

          <Divider
            label="或者使用第三方账号开始"
            labelPosition="center"
            my="lg"
          />
          <Group grow mb="md" mt="md">
            <Button
              leftIcon={<IconBrandGithub />}
              uppercase
              radius="md"
              variant="outline"
            >
              Google
            </Button>
            <Button leftIcon={<IconBrandTwitter />} uppercase radius="md">
              Twitter
            </Button>
          </Group>
        </Paper>
      </Container>
    </Center>
  );
}
