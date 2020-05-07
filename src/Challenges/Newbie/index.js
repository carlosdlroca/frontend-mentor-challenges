import loadable from "@loadable/component";

const ComingSoon = loadable(() => import("./ComingSoon"));
const FourCards = loadable(() => import("./FourCards"));
const SignUpForm = loadable(() => import("./SignUpForm"));
const SinglePrice = loadable(() => import("./SinglePrice"));
const LaunchingSoon = loadable(() => import("./LaunchingSoon"));

export default {
    ComingSoon,
    FourCards,
    SignUpForm,
    SinglePrice,
    LaunchingSoon,
};
