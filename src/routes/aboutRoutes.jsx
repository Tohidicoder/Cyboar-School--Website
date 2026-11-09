import { Route } from "react-router-dom";
import WhatWeDo from "../pages/about/WhatWeDo";
import Accreditation from "../pages/about/Accreditation";
import CyboardStory from "../pages/about/CyboardStory";
import Leadership from "../pages/about/Leadership";
import LeaderProfile from "../pages/about/LeaderProfile";
import Homeschooling from "../pages/about/Homeschooling";
// import TransferableJobs from "../pages/about/TransferableJobs";
// import PhysicallyDisabled from "../pages/about/PhysicallyDisabled";
// import BeyondAcademics from "../pages/about/BeyondAcademics";

const aboutRoutes = (
  <>
    <Route path="what-we-do" element={<WhatWeDo />} />
     <Route path="accreditation" element={<Accreditation />} />
     <Route path="cyboard-story-learning-from-chalk-to-click" element={<CyboardStory />} />
      <Route path="cyboard-leadership" element={<Leadership />} />
      <Route path="cyboard-leadership/:slug" element={<LeaderProfile />} />
      <Route path="homeschooling" element={<Homeschooling />} />
    {/*} />
  
   
    <Route path="cyboard-leadership/:slug" element={<LeaderProfile />} />
    <Route path="homeschooling" element={<Homeschooling />} />
    <Route path="transferable-jobs" element={<TransferableJobs />} />
    <Route path="inspiring-abilities" element={<PhysicallyDisabled />} />
    {/* <Route path="beyond-academics" element={<BeyondAcademics />} /> */}
  </>
);

export default aboutRoutes;