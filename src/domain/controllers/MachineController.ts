import { Request, Response } from "express";
import { MachineRepository } from "../repositories/MachineRepository";
import { CreateMachineUseCase } from "../useCases/CreateMachineUseCase";

const machineRepository = new MachineRepository();
const createMachineUseCase = new CreateMachineUseCase(machineRepository);

export class CreateMachineController {
  create(request: Request, response: Response) {
    const dataMachine = request.body;
    try {
      createMachineUseCase.create(dataMachine);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

// export class UserController {

//   async register(req: Request, res: Response) {
//     const createMachine = await MachineRepository.create(req.body);
//     if (createMachine) {
//       res.status(201).json({ msg: "Produto cadastrado com sucesso" });
//     } else {
//       res.status(400).send({ msg: "Erro ao cadastrar produto" });
//     }
//   }

//   async readAll(req: Request, res: Response) {
//     const allMachines = await MachineRepository.read();

//     if (allMachines) {
//       res.status(200).json(allMachines);
//     } else {
//       res.status(404).json({ msg: "falha ao procurar máquinas" });
//     }
//   }

//   async readOne(req: Request, res: Response) {
//     const idMachine = req.params.id;
//     const machineFound = await MachineRepository.readOne(idMachine);

//     if (machineFound) {
//       res.status(200).json(machineFound);
//     } else {
//       res.status(400).json({ msg: "maquina não encontrada" });
//     }
//   }

//   async update(req: Request, res: Response) {
//     const idMachine = req.params.id;
//     const { name, code, price, description } = req.body;
//     const newDataMachine = { name, code, price, description };
//     const machineFound = await MachineRepository.update(
//       idMachine,
//       newDataMachine
//     );

//     if (machineFound) {
//       res.status(200).json(machineFound);
//     } else {
//       res.status(400).json({ msg: "Erro ao atualizar cadastro" });
//     }
//   }

//   async delete(req: Request, res: Response) {
//     const findMachine = req.params.id;
//     const machineDeleted = await MachineRepository.delete(findMachine);

//     if (machineDeleted) {
//       res.status(200).json({ msg: "Cadastro deletado" });
//     } else {
//       res.status(400).json({ msg: "Erro ao remover cadastro" });
//     }
//   }
// }

// export default new UserController();
