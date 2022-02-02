# Agents of Clouds Assignment API

## Problem Domain

Design and develop a solution that will allow the users ( Buyers and Sellers ) to book appointments ahead of time.

## Specifications

- Web App (buyer):
  - User should be able to view list of sellers. (Get all sellers)
  - User should be able to search sellers.  (Get one seller where name is like search)
  - User should be able to request to book and appointment. (Create new appointment with buyer and seller ID)
  
- Web App (seller):
  - User should be able receive appointment requests. (Find all appointments with seller ID)
  - User should be able to accept/reject appointment request. (Update appointment with ID to accepted)

## Proposed Schema

![Proposed Schema](basic_api_model.png)