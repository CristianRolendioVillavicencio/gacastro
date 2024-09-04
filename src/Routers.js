import { Route, Routes } from "react-router-dom";

import HomeTwo from "./Components/HomeTwo";
import HomeThree from "./Components/HomeThree";
import HomeFour from "./Components/HomeFour";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Team from "./Components/Team";
import TeamDetails from "./Components/TeamDetails";
import Error from "./Components/Error";
import Services from "./Components/Services";
import RoofingServices from "./Components/Services/HomeImprovement/Roofing/index";
import CarpentryServices from "./Components/Services/HomeImprovement/Carpentry/index";
import CopperServices from "./Components/Services/HomeImprovement/Copper/index";
import GutterServices from "./Components/Services/HomeImprovement/Gutter/index";
import PaintingServices from "./Components/Services/HomeImprovement/Painting/index";
import SidingServices from "./Components/Services/HomeImprovement/Siding/index";
import WindDamageServices from "./Components/Services/Restoration/WindDamage/index";
import WaterDamageServices from "./Components/Services/Restoration/WaterDamage/index";
import TreeDamageServices from "./Components/Services/Restoration/TreeDamage/index";
import Project from "./Components/Project";
import ProjectDetails from "./Components/Project/ProjectDetails";
import Financing from "./Components/financing";
import HowHearthWorks from "./Components/financing/HowHearthWorks";
import GalleryPage from "./Components/Gallery/index";
import DesignYourHome from "./Components/DesingYourHome";
import AreasOfService from "./Components/AreasServices";
import LandingPage from "./Components/LandingPage";
import Faqs from "./Components/Faqs/index";
import RoofingPost from "./Components/Blogs/how-to-repair-roof-shingles";

// Importa los componentes de blog
import QuickEffectiveSolutionsRoofLeaks from "./Components/Blogs/quick-effective-solutions-roof-leaks";
import ProtectingHomeTreeDamage from "./Components/Blogs/protecting-home-tree-damage-storms";
import RoofRepairProcess from "./Components/Blogs/roof-repair-process";
import IdentifyRepairHiddenSidingDamage from "./Components/Blogs/identify-repair-hidden-siding-damage";
import PreventativeRoofMaintenance from "./Components/Blogs/preventative-roof-maintenance";
import ChoosingBestSidingMaterial from "./Components/Blogs/choosing-best-siding-material";
import RoofRepairAfterStorm from "./Components/Blogs/roof-repair-after-storm";
import RoofLeakFix from "./Components/Blogs/roof-leak-fix";
import TipsProtectHomeTreeDamage from "./Components/Blogs/tips-protect-home-tree-damage";
import ImportanceOfSiding from "./Components/Blogs/importance-of-siding";
import SpotRoofProblems from "./Components/Blogs/spot-roof-problems";
import RoofInspectionGuide from "./Components/Blogs/roof-inspection-guide";
import ReplaceSiding from "./Components/Blogs/replace-siding";
import PreparingRoofWinter from "./Components/Blogs/preparing-roof-winter";
import HandleRoofingEmergency from "./Components/Blogs/handle-roofing-emergency";
import BenefitsHighQualitySiding from "./Components/Blogs/benefits-high-quality-siding";
import RoofRepairFaq from "./Components/Blogs/roof-repair-faq";
import RoofSafetyMaintenance from "./Components/Blogs/roof-safety-maintenance";
import Sidingpost from "./Components/Blogs/siding-damage-replacement";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeThree />} />
      <Route exact path="/home-two" element={<HomeTwo />} />
      <Route exact path="/home-three" element={<HomeThree />} />
      <Route exact path="/home-four" element={<HomeFour />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/team-details" element={<TeamDetails />} />
      <Route exact path="/error" element={<Error />} />
      <Route exact path="/project" element={<Project />} />
      <Route exact path="/project-details" element={<ProjectDetails />} />
      <Route exact path="/services" element={<Services />} />
      <Route
        exact
        path="/services/roofing-services"
        element={<RoofingServices />}
      />
      <Route
        exact
        path="/services/carpentry-services"
        element={<CarpentryServices />}
      />
      <Route
        exact
        path="/services/copper-services"
        element={<CopperServices />}
      />
      <Route
        exact
        path="/services/gutter-services"
        element={<GutterServices />}
      />
      <Route
        exact
        path="/services/painting-services"
        element={<PaintingServices />}
      />
      <Route
        exact
        path="/services/siding-services"
        element={<SidingServices />}
      />
      <Route
        exact
        path="/services/wind-damage-services"
        element={<WindDamageServices />}
      />
      <Route
        exact
        path="/services/water-damage-services"
        element={<WaterDamageServices />}
      />
      <Route
        exact
        path="/services/tree-damage-services"
        element={<TreeDamageServices />}
      />
      <Route exact path="/financing" element={<Financing />} />
      <Route exact path="/how-hearth-works" element={<HowHearthWorks />} />
      <Route exact path="/gallery" element={<GalleryPage />} />
      <Route exact path="/design-your-home" element={<DesignYourHome />} />
      <Route exact path="/areas-of-service" element={<AreasOfService />} />
      <Route exact path="/landing-page" element={<LandingPage />} />
      <Route exact path="/Faqs" element={<Faqs />} />

      {/* Rutas dinámicas para los blogs */}
      <Route exact path="/Roofing-Post" element={<RoofingPost />} />
      <Route exact path="/siding-damage-replacement" element={<Sidingpost />} />
      <Route
        exact
        path="/quick-effective-solutions-roof-leaks"
        element={<QuickEffectiveSolutionsRoofLeaks />}
      />
      <Route
        exact
        path="/protecting-home-tree-damage-storms"
        element={<ProtectingHomeTreeDamage />}
      />
      <Route
        exact
        path="/roof-repair-process"
        element={<RoofRepairProcess />}
      />
      <Route
        exact
        path="/identify-repair-hidden-siding-damage"
        element={<IdentifyRepairHiddenSidingDamage />}
      />
      <Route
        exact
        path="/preventative-roof-maintenance"
        element={<PreventativeRoofMaintenance />}
      />
      <Route
        exact
        path="/choosing-best-siding-material"
        element={<ChoosingBestSidingMaterial />}
      />
      <Route
        exact
        path="/roof-repair-after-storm"
        element={<RoofRepairAfterStorm />}
      />
      <Route exact path="/roof-leak-fix" element={<RoofLeakFix />} />
      <Route
        exact
        path="/tips-protect-home-tree-damage"
        element={<TipsProtectHomeTreeDamage />}
      />
      <Route
        exact
        path="/importance-of-siding"
        element={<ImportanceOfSiding />}
      />
      <Route exact path="/spot-roof-problems" element={<SpotRoofProblems />} />
      <Route
        exact
        path="/roof-inspection-guide"
        element={<RoofInspectionGuide />}
      />
      <Route exact path="/replace-siding" element={<ReplaceSiding />} />
      <Route
        exact
        path="/preparing-roof-winter"
        element={<PreparingRoofWinter />}
      />
      <Route
        exact
        path="/handle-roofing-emergency"
        element={<HandleRoofingEmergency />}
      />
      <Route
        exact
        path="/benefits-high-quality-siding"
        element={<BenefitsHighQualitySiding />}
      />
      <Route exact path="/roof-repair-faq" element={<RoofRepairFaq />} />
      <Route
        exact
        path="/roof-safety-maintenance"
        element={<RoofSafetyMaintenance />}
      />
    </Routes>
  );
}

export default Routers;
