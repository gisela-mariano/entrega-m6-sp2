import axios from "axios";

export const apiCreateAnticipation = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
  headers: {
    "Content-Type": "application/json",
  }
})

export const apiSimulateTimeout = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout",
  headers: {
    "Content-Type": "application/json",
  }
})

export const apiSimulateInternalError = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError",
  headers: {
    "Content-Type": "application/json",
  }
})

export const apiSimulateDelay = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=3000",
  headers: {
    "Content-Type": "application/json",
  }
})