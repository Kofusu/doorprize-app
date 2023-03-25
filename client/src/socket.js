import { io } from "socket.io-client"
import { apiEndpoint } from "./configs/config"

const URL = apiEndpoint

export const socket = io(URL)
