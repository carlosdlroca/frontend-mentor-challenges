import loadable from "@loadable/component";

const ComingSoon = loadable(() => import("./ComingSoon"));
const FourCards = loadable(() => import("./FourCards"));
const SignUpForm = loadable(() => import("./SignUpForm"));
const SinglePrice = loadable(() => import("./SinglePrice"));
const LandingPage = loadable(() => import("./LandingPage"));
const LaunchingSoon = loadable(() => import("./LaunchingSoon"));
const BootcampSlider = loadable(() => import("./BootcampSlider"));
const FyloLandingPage = loadable(() => import("./FyloLandingPage"));
const AlternatingFeature = loadable(() => import("./AlternatingFeature"));

export default {
    ComingSoon,
    FourCards,
    SignUpForm,
    SinglePrice,
    LandingPage,
    LaunchingSoon,
    BootcampSlider,
    FyloLandingPage,
    AlternatingFeature,
};
