import DealershipService from '../services/dealership.service.js';

class DealershipController {
  static async createDealership(req, res) {
    try {
      const dealership = await DealershipService.createDealership(req.body);
      res.status(201).json(dealership);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllDealerships(req, res) {
    try {
      const dealerships = await DealershipService.getAllDealerships();
      res.json(dealerships);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getDealershipDetails(req, res) {
    try {
      const dealership = await DealershipService.getDealershipById(req.params.id);
      if (!dealership) {
        return res.status(404).json({ error: 'Dealership not found' });
      }
      res.json(dealership);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addUserToDealership(req, res) {
    try {
      const { user_id } = req.body;
      const result = await DealershipService.addUserToDealership(
        req.params.id, 
        user_id
      );
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async addCarToDealership(req, res) {
    try {
      const car = await DealershipService.addCarToDealership(
        req.params.id, 
        req.body
      );
      res.status(201).json(car);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default DealershipController;