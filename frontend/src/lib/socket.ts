// SPDX-FileCopyrightText: 2023 Marlon W (Mawoka)
//
// SPDX-License-Identifier: MPL-2.0

import { io } from 'socket.io-client';

export const socket = io(import.meta.env.API_URL,{
  path: "/api/socket.io",
  // transports: ["websocket", "polling"],
});
