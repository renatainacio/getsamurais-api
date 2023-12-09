# Get Samurais - Back-end

"Get Samurais" is a REST API designed for connecting service providers to service users. This application enables users to register, query and update services.

## API URL
API is available at: https://getsamurais-api-kvwe.onrender.com

## About
The 'Get Samurais' app aims to streamline the process of finding reliable service providers while simplifying the task for service providers to connect with potential customers.

Key features include:
- Sign up
- Sign in
- Register a new service
- Get all services from a user
- Get a service by id
- Query a service by description
- List all service categories
- List all services
- Update or deactivate a service

Future implementations:
- Rate service providers
- Payment through the platform

## Available Endpoints

### Users
|  HTTP Method | Route  | Description  |
|---|---|---|
| POST  | /users  | Easily create an account  |
| GET  | / | Securely access your account  |
| GET  | /users/me/users | Get information associated with the logged user  |
| GET  | /users/me/services  | View the complete list of services associated with the logged user  |

### Services
|  HTTP Method | Route  | Description  |
|---|---|---|
| POST  | /services | Register a new service  |
| GET  | /categories | Get list of service categories  |
| GET  | /services | Get list of all active services, accepting a "description" value as query parameter |
| GET  | /services/:id | Get a service given an id |
| PUT  | /services/:id | Update a service given an id and the details in the body |
| DELETE  | /services/:id | Delete a service given an id |


## Technologies
<div style="display: inline_block">
   <img align="center" alt="node" src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
   <img align="center" alt="express" src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white">
   <img align="center" alt="postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
</div>

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want. 
```bash
createdb -U <your_username> -h localhost -p <your_port_number> -e <your_database_name>
```
4. Use the dump.sql file.
```bash
psql -U <your_username> -h localhost -p <your_port_number> -d <your_database_name> -f dump.sql
```

4. Configure the `.env.development` file using the `.env.example` file
5. Run the back-end in a development environment:

```bash
npm run dev
```

## Starting for production

```bash
npm start
```
