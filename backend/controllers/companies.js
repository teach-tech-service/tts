import CompanyModel from "../models/company";

export function getCompanies(req, res) {
  const getAllCompanies = async function() {
    let companies = await CompanyModel.aggregate([
      {
        $limit: 10
      },
      {
        $skip: req.params.page * 10 - 10
      }
    ]);

    if (companies.length === 0) {
      throw new Error("Error in pagination, out of range");
    }
    return companies;
  };

  const getInfoCompanies = async function() {
    return await CompanyModel.count({});
  };

  Promise.all([getAllCompanies(), getInfoCompanies()])
    .then(result => {
      res.send({
        companies: result[0],
        info: result[1]
      });
    })
    .catch(err => {
      res.status(404).send({});
    });
}

export async function getCompanyById(req, res) {
  const company = await CompanyModel.findOne({
    _id: req.params.id
  });

  if (!company) {
    return res.status(404).send({});
  }
  res.send(company);
}

export function postCompany(req, res) {
  const newCompany = new CompanyModel(req.body);
  newCompany.save(() => {
    if (err) {
      return res.status(400).send({ err });
    }
    res.status(201).send();
  });
}

export async function putCompany(req, res) {
  const company = await CompanyModel.updateOne({
    _id: req.params.id
  });

  if (!company) {
    return res.status(404).send({});
  }

  res.send(company);
}

export async function deleteCompany(req, res) {
  const company = await CompanyModel.deleteOne({
    _id: req.params.id
  });

  res.send(company);
}
