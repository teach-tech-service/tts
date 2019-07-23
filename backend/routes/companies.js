import {
  getCompanies,
  getCompanyById,
  deleteCompany,
  postCompany,
  putCompany
} from "../controllers/companies";

export default router => {
  router.get("/page/:page", getCompanies);
  router.get("/:id", getCompanyById);
  router.post("/", postCompany);
  router.put("/:id", putCompany);
  router.delete("/:id", deleteCompany);
  return router;
};
