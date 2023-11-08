import axios from "axios";

export function allChats() {
  return axios
    .get("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
    .then((resps) => {
      console.log({ resps });
      return resps;
    })
    .catch((error) => {
      console.error({ error });
    });
}
