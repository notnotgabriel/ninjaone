# NinjaONE Showcase

## Instructions

This project is using Vite as a build tool with a simple Typescript template.

To run the project locally, ensure you have Node.js version 20.9.0 installed. It's recommended to use [nvm](https://github.com/nvm-sh/nvm).

Run the following commands:

```bash
nvm use
npm install
npm run dev
```

The app will be available at the vite default port `http://localhost:5173`.

## Running the tests

This project is using Vitest and React Testing Library for component testing.

Run `npm test` to run and watch all the tests

## Backend

this projects relies on the [serverAPP](https://github.com/NinjaRMM/devicesTask_serverApp).
So in order to work locally, you need to run the serverAPP before running this project.

## Architecture (or simply how things are organized)

On this project we're borrowing some concepts of domain-driven design and clean architecure to better organized the code, to better reasoning on how the pieces of code interact with each other and to decouple the code related to UI, business logic and external communication.

The application folders are organized in a bounded context way. Each folder will represent a "module" or "section" of the business.

For now we have the following bounded contexts:

1. core

> Everything that is core of our application. Any component, layer, piece of code that can be reusable throughout the app.

2. DeviceMangement

> All features related to the device management such as listing, creating, editing and deleting devices.

Each one of these would implement the following three layers.

## UI

UI components responsible for rendering the application data. It depends on the other layers to present data and create user interactions.

## Infra

The infra (infrastructure) is responsible for handling the external communications such as API requests.

To implement the external API calls, we're following the repository pattern, where we can define the async functions to operate the call through the HTTP Client.

## Domain

The domain layer is the house of the core business logic and rules for that specific module where it is located.
This layer should be the purest as it can be so it cannot depend on any other layer.

Also in the domain layer we will represent the business entities. So you can find all the data shape types here.

## Stack

- React
- TypeScript
- Vite
- Mantine UI
- React Query
- Vitest
- React Testing Library
- Axios
- Mswjs
