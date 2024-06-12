"use client";

import React, { FC, useEffect, useState } from "react";
import { getStreamData } from "@/lib/resourceCalls";
import MovieTvShowCard from "@/components/MovieTvShowCard";

interface MovieTvShowProps {
  type: "movie" | "series";
  name: string;
}

export interface StreamDataType {
  imageSet: {
    verticalPoster: {
      w480: string;
    };
    horizontalPoster: {
      w480: string;
    };
  };
  rating: number;
  title: string;
  imdbId: string;
  overview: string;
  genres: { id: string; name: string }[];
  streamingOptions: {
    in: {
      service: {
        id: string;
        name: string;
      };
      link: string;
    }[];
  };
}

const dummyData = {
  itemType: "show",
  showType: "series",
  id: "1",
  imdbId: "tt0108778",
  tmdbId: "tv/1668",
  title: "Friends",
  overview:
    "Six young people, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.",
  firstAirYear: 1994,
  lastAirYear: 2004,
  originalTitle: "Friends",
  genres: [
    {
      id: "comedy",
      name: "Comedy",
    },
    {
      id: "romance",
      name: "Romance",
    },
  ],
  creators: ["Marta Kauffman", "David Crane"],
  cast: [
    "Jennifer Aniston",
    "Courteney Cox",
    "Lisa Kudrow",
    "Matt LeBlanc",
    "Matthew Perry",
    "David Schwimmer",
    "James Michael Tyler",
  ],
  rating: 86,
  seasonCount: 10,
  episodeCount: 228,
  imageSet: {
    verticalPoster: {
      w240: "https://cdn.movieofthenight.com/show/1/poster/vertical/en/240.jpg?Expires=1749515751&Signature=MxXk6yMlUav54Vs5R1Nm-tUK6aAoAX3AEvsLfAnEMAZ-~MXJCgA-1w6U2nj~AEEXiK9eFg7slp6mB4Af9owSnZOmDlIau-H1p~6OCOjkqiC64tRsvm3Ro9pskQKCyy4H-fJR~w10-lzDpznxyywR-NtpKawntWrvkwOxcLWpoWPFm~LraTA0QBfhNtywU2jR217YlYiHlgSQI~0Lz8ZOnPt46fTqBKFfYiBBLMjUaLqkkSePcP~UWX-qn07Ogsc8JkYStzgJDAWgpnoisVZj6DLrCwaANkx5FJ2pVdGGwckElYr4oWy-YUe2pBFEPdnv1xF6tMv474OqSID-V31H9g__&Key-Pair-Id=KK4HN3OO4AT5R",
      w360: "https://cdn.movieofthenight.com/show/1/poster/vertical/en/360.jpg?Expires=1749515751&Signature=HFIRfIeNKgaoOOFbOu2gssNiL~nP156dTuhpX0ajzTxJ0inofK4IC6axm2dP30vvwB1Bv4RSstyLyuW9dx5-TXMq44NZ3a0d~k5dxVwftVep2DErijDRi0CjpMcOW-E8JToijaoN6vrvDzb22es~~OY0zab6yecNJn21XZgQvEOH1IlEj23CGtoogXDpMCKiv4IdRna1c4FREOmJtrEUbFOggSp2gjws9sezv4v847upb5PMDLFz4o6gjQV6W~75D9MLxNBDl5rby6HJjn8H6fp2Os683THxWR4BH70kZVsTv208E-beHxq7erePBuCEvboL01egZBrtzRLSsJV1TQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      w480: "https://cdn.movieofthenight.com/show/1/poster/vertical/en/480.jpg?Expires=1749515751&Signature=VaZ-pqzEi8xIRPfbnIK6MOyx6PXBYAPLpj3gFJgvicBVuiGqD0G5dZkfKE1Wx3TEGrOH9~4v57H4jOn-yvXfvmpmkN8G-Fh62pk-k4tn9xBLYvLLHo-tt3MjEhDiGR5qonIIp0Rzlmxb9dIKy74DQgEyqrw0IxD9JS5PJIvFDDjwV7r56wwPsgRbQgM6S2KH7BVtR1w-HtdE72ixGEJPcqGtT2TCUD6i8sSpgY9qkukEViVmxSTIsxOU4XslmGvDjp7JxXOwC~4GBERF2wGlOJFI1XsER4~eYEo6MzZW264LtLD8JU-JTbXBByygWeoVzsZTSfEifOzWapROt1mKnw__&Key-Pair-Id=KK4HN3OO4AT5R",
      w600: "https://cdn.movieofthenight.com/show/1/poster/vertical/en/600.jpg?Expires=1749515751&Signature=TEGKXB1UEVEe0dpUN8K-cJWw55JhPJ-q4hrYNnroiNwu9vgtt05KVglLdKaeOO7BvqigofeBMO9MnJZbWAv-YF145hYZEPLtzDx8NWXgQ4l~gI-CQyOnykNZvaeo0CzWllOsE3Wdvp4rS2UIYNW21rGj8K9CsqwoSdDI7I4BkXudZ0Szd1RMQquQttm4v8Doy5T-rKlWVyth410qdMFL6DnZRbrExua8jjwjyN4NO9ZSZM0sQ6y2qLr4T4rwAWOt9S0IaxOkW-z6sgRn-lQ8D1b14Zs4tHmLlnXgCjnriRTfwe1~J~FOAKzRai8-2U97vpgKldF~mtay8q-WPJ3Hzg__&Key-Pair-Id=KK4HN3OO4AT5R",
      w720: "https://cdn.movieofthenight.com/show/1/poster/vertical/en/720.jpg?Expires=1749515751&Signature=VedPN-ujmdW-MFbuFDsu3FW9273EaKomgfOWzncb7Hq2BL9un683I-QtsXC~~p~1i3qAmpL~pJlMcU8FXnaYGuhaddS9HUz4RFjwMtwR3Pqk3SYI8eiZf5tjFZwUcrT4DpsW3nU69pPz65bZXf0TJd1hmEsa~ZdvZGTWzkMLFSlFak5C~1YR8oWU4Df51oLQAdo8Dk4Zp6zDvUf-cClRbv2b94d5DIrWqqpF5alo1P1tdFzNO~rXwLiIx2B9WRcsKF6kfIDLZQtgsqp1dK-XC~Xg9pQmAh5CsrWZix9tobeWZGmKoUxdWOKfU6X9FZQdpLVyHxjMomm~vuRNHK6fBQ__&Key-Pair-Id=KK4HN3OO4AT5R",
    },
    horizontalPoster: {
      w360: "https://cdn.movieofthenight.com/show/1/poster/horizontal/en/360.jpg?Expires=1749515755&Signature=Kl50ARHeeE6DRgbfwCgr0ly725nFxTyJWdD0iIHYYyYA0X5KOZ96utdvJ9Go82WiCdTBmvZ~BjMSnJgIZ-UqbMIjQ0PMLOAYQbn~JLcGytvRFxnIE6Itwen6GvQqeZCw8hVnAUrp22q~qz1LWzBlzXC3DjZe~dICHoL-CN5BJ-ixFXUvrwbJYjTCYEMdeZVEgNduiKiSn7WgFR7k611o2ZAv~zkUiPeRf9BL2wnnzyZ-M7iu22Jr9CilVFvZudepyr3p76sne5g~2J6FzukbucB7g4MoermERKHaEW-oFDdB1t~mYqIG86zGSp5rPJe2vbf0wz0f7VXI8v~25bgtOg__&Key-Pair-Id=KK4HN3OO4AT5R",
      w480: "https://cdn.movieofthenight.com/show/1/poster/horizontal/en/480.jpg?Expires=1749515755&Signature=iSsR78Ajwt5gm4U4jMazwwx92ShgPHz8hg3QZTw~NDyMxfvSK1U~BjCJ0CIJuTfs8Tm3Rr3DPQKndM6J9VZEe5tuwIeJBP-iytGtA-cF7Qo-r-0geeGqc0AHA0f54d8O3UaMpeWhL4NQDHZltZt9KujH4bx9NzsZH03V4nskhBHBx8F-iCTwZ2Sf3hjTiH-w73EuS-p4G9NtpgJ3o84If0CqAeUo6x~g~Q-Vw6jALUX--9xfZwU52NnThlD0j0OwSOysuWl5CkmVJtboicxBcN~RgoNKdODWo8qFEg5MXQbcNmdVFv1PC-AVj-~UeSyW8~pxpPwzyNylj29Erwyf~Q__&Key-Pair-Id=KK4HN3OO4AT5R",
      w720: "https://cdn.movieofthenight.com/show/1/poster/horizontal/en/720.jpg?Expires=1749515755&Signature=CQWjlQ71e47daqrEobFxoYsIlyVv0wP1pYgIAq91pmRluqj9s2QyAYjWMEODQotqp4QLImzpFHj3R~FGc~1PcIOVpqxydv7BBNSDYIUbOWCuFN8YqAfLMb2bceskvsEd-Mm6cWzbhKLUHPmExxnVJaS7LoRF0vaFpJYtmvTIm-qza-ntG7idvd6M5FZUgxnBnVVGCPTh5SHVJG-NSYdo3EpNRkVtb8ae0n0KYmwRQ3QfO7JqdnzBYSoEJyiMVkpApgE9SqMfHdZiaKtlacVQbLSCds3TCCRbaE-Hd9tEkRfaZh2nx9p~2tlgO46faPvyAhXk6QRJdsnt11~8iYWLbg__&Key-Pair-Id=KK4HN3OO4AT5R",
      w1080:
        "https://cdn.movieofthenight.com/show/1/poster/horizontal/en/1080.jpg?Expires=1749515755&Signature=aTOOQoMl2k7m66Ee-dXO8TsmFVmerT-VuGUdWjxEJ7cGw0~J9NhTsPVHcm-ltpoivfDtJZidRVsg1dLPsFlFGTjMlrOLE7wSQ6D3WIG9haPAr2p~hV2s1RQX3WoOBEOTKRYdE-XvkDfDRspzXYPUTSIVxQEf7AaMicbpng~zikXvMQkNCU8gC7ny7VyICMMS2aW4uVCi~BkfQjL6lEUuac2MiZ50bOTYN~0tGxRHJnBz-uRQ9jXxTXzSm0qnB5E0WQXLI8SNONDs8hBDFJOFOpHgcL1NVz6vjDNVp~TRIN48BPidOumq7Br12pjy7vVhjl-AlIDybIm3o9BWpiEfAw__&Key-Pair-Id=KK4HN3OO4AT5R",
      w1440:
        "https://cdn.movieofthenight.com/show/1/poster/horizontal/en/1440.jpg?Expires=1749515755&Signature=Jv0SZ7bKzPgEtBSx3-3G5y5WupCoZKRGioxbBMZ~XqU5CAUTKdL6Q82Q1choFzttSsV6Gd0G7qMhLWzKdBj8hJ4hPTCTIZLxcDpBX6Q68tyPHlT7A8PduI0CWvNb6gzH~aeX62RKXTnVuVatFKSZz4GzjISjiYLZKAo-hnztEJzYn0TZacx07cMe5gjFGSMOrmipMf9OReTZ72pmidBbaY0jlbvfQ7Ti66aJYhG-i8OOMMG95P1Bg4--EoO0sb7OOT9ZrTlYCzJuvnL8VEIx0cfJSuIfHCslUH-PWLUBQ4Od9XtmI97iKbqmwTt2ALqHES3TMtAdNC-W~lfqtTl4Uw__&Key-Pair-Id=KK4HN3OO4AT5R",
    },
    verticalBackdrop: {
      w240: "https://cdn.movieofthenight.com/show/1/backdrop/vertical/240.jpg?Expires=1749515726&Signature=B8FGHYICDFJt1QkEakkG-332obCnKPM5E0BkDLD8SkbsqHpNNy-I6DHRMgGEm0sgg6BngsWSbsWRie5zuG5a6OYBUuAiurdIm5I8UQbQZXGZtBTyYyjiNARutCvVpkf4Pw1INbQgEVz4otOJNUUZyV95KMfNf8nfEnLMavYjlCgIBL0EmXUAsnxJyl-vxUGLnDwj0b2LjVBmbbOi4Un8RY9nx-pJSsoY-zLOpXNS4CTUtco~bfbOdV-TjYtg1qVSSaTN0WfOLxC6HgDX-oNBp20L3869oKQ~f6e7GzHtkvET1-ISRzK8wX0UugybTrBmEtgObskgfMj2HH-VX4ZZIA__&Key-Pair-Id=KK4HN3OO4AT5R",
      w360: "https://cdn.movieofthenight.com/show/1/backdrop/vertical/360.jpg?Expires=1749515726&Signature=WMudfZ~x3IqRHU9RijyJUtFDMKu16cNQTtD~iOtJvvatG~7PdPhNXxegWHMOu4vc38aYwFZ-BnKTIbhyHV1FuY9~uUMCkWN7ACbL2ZQrsq24WT7OWfCZ05~PhjrFK--8sqnyJB9KEFM74Oelzreu8Yp8vobFTCMW~Msu-QB06N39agRuT0jw7KPhOY4JTPw~TXqXMCtOfh-D9AVnpB99zMI-wYtuqd-zfT6NQO-W2tGB4h-CAys9HYW4a3tNs09tcFY8ISTfWMvMSmgbrKrwQzsXz1P5ZnsI9ZNAJ6N0cDwwitOH5o9oJvhXvILoMJIgcr02EGbL4sRakUdgH5lOqw__&Key-Pair-Id=KK4HN3OO4AT5R",
      w480: "https://cdn.movieofthenight.com/show/1/backdrop/vertical/480.jpg?Expires=1749515726&Signature=Hk1VcV4pq89OYvnPp~PebPKwvi8ymOKhYaPSDzxvVCxr~p~y9AlDxqt8Vftv8KPxFFIXLnsLRm19fjb4-JYaphNcsaHr3l43TLo8UlWWyQWdgUW-r4DeMFnL3uHZq1aKOjRUPnJb8IvC6iwlFNfiJqmuCGq8T83mis8IUycNB9mIJHETAqfbL~p41LXD4kA70PKFwKWu6VcTxgz-HbN34LcLT3V8~nCWBB0ie~patOeb-MVFVW4Jk~AHMKzvWlaEL4CRMa2ANM6VtLoLIBAXsSa8uCZVd6TrcWHBAhA96InNCSxS36kF-2GrLscARURoFcrfNNdFKTblp5HHQqiQJQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      w600: "https://cdn.movieofthenight.com/show/1/backdrop/vertical/600.jpg?Expires=1749515726&Signature=NoQwzfB5nDdK5as4ZN86QvICDMg9d2hOPb6sqDjSdq7akL243u7teefHAdeMHPDQHUW6~NZEr5K9Weo9fV-VIwFNJ6It-PljVu1aaob7XtwUkr5-gky3WRNDlKXwBKIHKztDjcSxCpARKJbNOkA~4hGng15gJObzxx-1nS~Fp-QzXm0X0aE3yZdIvV1JXudl8bSiwcl5mSuXW~qCEZa~j0omcIRm-YwkxTFixFlmF19bUrnd3v-f5NzDMAP9sZnmMk8EeEiBWVIn8DKU5CQN3NEffNJzyxQ32mRW2tKD~tVuKJxly~JJALESiza~iQgf8Ow7ZDMENKXSjbiQJWLtOA__&Key-Pair-Id=KK4HN3OO4AT5R",
      w720: "https://cdn.movieofthenight.com/show/1/backdrop/vertical/720.jpg?Expires=1749515726&Signature=WSxYF~8nHYFTBe5xzgt1Y3N91M87VCEM5ommj8z7zfFfbUj0oqKgWBfYGWCDh9QBahU2jLsW-ZeKjxfE6XbMuqx~Uz8HZ3fXCYvCIb9VrilxT-LDkkJo9xgCnMMjW1Ohi7nyH6YIuGqecH4uNs-r0cz9FHniq~GMgUnIZN4PhVtmWYkuxN9aaF8OOzoABiA0VILv1LD7nNQoOnJYAbWBiM5BZVF5bOwNJYF6sKTr-lwDh0wwX-erRC7OMbCUiCiz~QplD5887dvSgFNA3-L2ceujksLPnXcS7Au5g5uKPOP22XNr6k8LCtYCeh7GXKv-wTjbCdS3DFeN0TKa0T5GKg__&Key-Pair-Id=KK4HN3OO4AT5R",
    },
    horizontalBackdrop: {
      w360: "https://cdn.movieofthenight.com/show/1/backdrop/horizontal/360.jpg?Expires=1749515730&Signature=Q2rkpCM9n8KGEIOrN7iBH4w3onsk3njmB~qUX5lntdSS4NI4TqkdjsuCVdBHDDp9IruoQljQEvfoTxDAzz5YmHWgf9gHsR-oAtjp0BVemxT6qSTnYoNVdWSN1ZHMhrTj29BDiF8qI64skCGrVl-eQIDpENmJQAG6pdkbWi1hYtDxiuY8bavr0iX2-GFKV4YHYq5mbnQq0M5rUiXGETn3RhnMwTTL1vWP6OJVQVs9p84EBSTVyWEjL0WL4lijGmvYNlSj5z-K8IUwlW-8QqE3PCWSkqL2vOlhaYPsY5JbkzWxCM3kL2v3s58~gFjZa5ty-rJcYc7ibMglVCBWo4xFYQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      w480: "https://cdn.movieofthenight.com/show/1/backdrop/horizontal/480.jpg?Expires=1749515730&Signature=BTa3PrwJghy~pOvI5Z5bL5kLI~aEZ54LgPE0IXzlo4DXuv0JQy80nYU5MC1aoUJcApn-snvV4bZErNWnDub4rXEFlL55SFHwfXH-rytf-m6lId7QOqiGll97ay~g4a4GW911FeOu49mqIh7M7qidr~ckz42IV76RRzsc2dYTnHHyyzNOnp955cguwEQZrgt6FgNl5lchIZru4iw7Z1Eg99SPanDBmue4LKSOnbV45yEfuVEfzWBkS8RvXG8w2MKQqFIZP~nMgOL1QZXcRYdy0XIMupjqn9QNLDpqZ4Ia0MwIA47fv~pZOTdX00Mj5Ju0NH85pGEhKJPQFZWB~g7m9Q__&Key-Pair-Id=KK4HN3OO4AT5R",
      w720: "https://cdn.movieofthenight.com/show/1/backdrop/horizontal/720.jpg?Expires=1749515730&Signature=IbEYd9hq9jcpMwlCEGrGgI~vHuEnWj08VW7VxVz0kef~oGx6djmE6VQuvcEw68nXFdiMO9nddOs~-tMxansWxZryfe64FwYBbIQLdbXbJtUWwAda9LqRr0xTne6XLg1x2C4gw5H8MMeAmR6tkLXM7p4tp7rbtO8OIFXUpY5a7kCMMSKcCf~8k8puZZmreoHu3ik~j04SHqTyYeichOeuUj4879584SFCpwvCLPPkiiuDigu7NgsSAD2vQGAFX3HC5bT3QhoFCOi0Se07xZF09kI-2ZlJ2v~nJ1i7zYR7YQVKVg04IwGjFBxbVcknLK18Bty~35~K77ylRZZ56Oxhjw__&Key-Pair-Id=KK4HN3OO4AT5R",
      w1080:
        "https://cdn.movieofthenight.com/show/1/backdrop/horizontal/1080.jpg?Expires=1749515730&Signature=fmZl6hSgS9O2D6PX5WlzRIaYxwhl1yn~n058bUX3TaY3upUNPqMUi7tYVjHlgah3qW2P-5FUhaS4gP~YMjxAjBTR4t8vC7jtyZEf7olOzraxmn1-q3DHlTGEj9CIU0ecrJI6IgG-b6bgoTvi0~AqKCj5XMbmdUmp-Z2zhulqsFQwUz8LlDGvglzmsyRDbIlUiDwSyKwKeJOIeOR78m9VMSnzgtHtxYw7JowJ7gBL4yPAcGFerxdzJEiLFu61Y2usO4r~51UzBO-hPbe0GQQRqgbgxTSXfRLPrDSz~a8Jx8VqDGmobUJY50ZIZ9dNOaYx~G2nm86lnezDv59Eb9OYhw__&Key-Pair-Id=KK4HN3OO4AT5R",
      w1440:
        "https://cdn.movieofthenight.com/show/1/backdrop/horizontal/1440.jpg?Expires=1749515730&Signature=bwnWvivagPzrTqigUgNtCd-vSyoXXOljTJ8RyBOlMmK42ZLVVQiSREuF-1GDXRdzbUfyHDB0gKju0tM7u4ahYHvF8SxubCnsUyqreiH-KsejSNkHuaFkJGgFfGP4~oa6f-0xxseVsxGXYX4phAVULoc7nO~2qSPrLqk2gy0lCzAC7tPLzjD~yHA~oWRyTub4QuZ9dzC3TfdCuWW4UdTQL7jweLr6lEE~G1gHSLFGtwLN1kmDK8wVAS19lgmn-JVtukz5808Vmx~gY1uEBWFetg0VZ3f9xZ6JiuhQcPMg8s~UrAB2vnMuGtj0ievdmz7CpwQ0nbMIzjR-L06Y7UP54g__&Key-Pair-Id=KK4HN3OO4AT5R",
    },
  },
  streamingOptions: {
    in: [
      {
        service: {
          id: "netflix",
          name: "Netflix",
          homePage: "https://www.netflix.com/",
          themeColorCode: "#E50914",
          imageSet: {
            lightThemeImage:
              "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
            darkThemeImage:
              "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
            whiteImage:
              "https://media.movieofthenight.com/services/netflix/logo-white.svg",
          },
        },
        type: "subscription",
        link: "https://www.netflix.com/title/70153404/",
        videoLink: "https://www.netflix.com/watch/70153404",
        quality: "hd",
        audios: [
          {
            language: "eng",
          },
        ],
        subtitles: [
          {
            closedCaptions: false,
            locale: {
              language: "eng",
            },
          },
          {
            closedCaptions: false,
            locale: {
              language: "hin",
            },
          },
        ],
        expiresSoon: false,
        availableSince: 1648614685,
      },
    ],
  },
};

const MovieTvShow: FC<MovieTvShowProps> = ({ type, name }) => {
  const [streamData, setStreamData] = useState<StreamDataType | null>();

  useEffect(() => {
    getStreamData(name, type).then((data) => setStreamData(data));
  }, []);

  if (!streamData) {
    return <p>Loading...</p>;
  }

  return <MovieTvShowCard streamData={streamData} />;
};

export default MovieTvShow;
