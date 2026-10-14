/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Registrationmodel, sequelize } from "../models/Registrationmodel.js";
await sequelize.sync();

const registrationcontroller ={
    // SELECT ALL
    index: async (req, res) => {
        const data = await Registrationmodel.findAll();
        res.json(data);
    },

    // INSERT
    insert: async (req, res) => {
        const {
            participant_id,
            event_id,
            registrattion_date,
            status,
            payment_status
        } = req.body;

      const data =  await Registrationmodel.create({
            participant_id,
            event_id,
            registrattion_date,
            status,
            payment_status
        });

        res.status(201).json({
            "message": "Event inserted successfully",
        "data": data
        });
    },

    // SELECT BY ID
    selectById: async (req, res) => {
        const data = await Registrationmodel.findByPk(req.params.id);

        if (!data) {
            return res.status(404).json({
                "status": "false",
                "message": "Registration not found"
            });
        }

        res.json(data);
    },

};

export { registrationcontroller};