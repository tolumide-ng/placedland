import { PlacedFeatures } from "@organisms/PlacedFeatures";
import { PlacedInfo } from "@organisms/PlacedInfo";
import { PlacedOffers } from "@organisms/PlacedOffers";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { RootState } from "@store/modules/types";
import { fetchLandingAction } from "@store/modules/landing/actions";
import { LandingStateDef } from "src/main/commonTypes";
import { LoadScreen } from "@organisms/LoadScreen";

export const LandingPage = () => {
    const [data, setData] = React.useState<undefined | LandingStateDef>(
        undefined
    );
    const dispatch = useDispatch();
    const selector = useSelector(
        (state: RootState) => state.fetchLandingReducer
    );

    React.useEffect(() => {
        let mounted = true;

        if (mounted) {
            if (selector?.status === "success") {
                setData(selector.data);
            }
            if (selector?.status === "rest") {
                dispatch(
                    fetchLandingAction({
                        path:
                            "venue/marketing/beta-brand-page/gourmet-burger-kitchen",
                        method: "GET",
                        payload: {},
                    })
                );
            }
        }

        return function cleanup() {
            mounted = false;
        };
    }, [selector?.status]);

    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                {data ? (
                    <>
                        {" "}
                        <PlacedOffers
                            headerImg={data.photos.header}
                            logo={data.photos.logo}
                        />
                        <PlacedFeatures
                            mainQuote={data.main_quote}
                            carousel={data.photos.carousel}
                            name={data.details.name}
                            about={data.about}
                        />
                        <PlacedInfo quotes={data.quotes} />
                    </>
                ) : (
                    <LoadScreen />
                )}
            </article>
        </article>
    );
};
