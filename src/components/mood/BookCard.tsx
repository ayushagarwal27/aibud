import React, { FC, useEffect, useState } from "react";
import { getBookData } from "@/app/api/actions";
import ProgressiveImage from "@/components/progressiveImage";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { RiGooglePlayFill } from "react-icons/ri";
import bookImg from "../../assets/images/book.jpg";
import { handleError } from "@/lib/utils";

interface BookCardProps {
  novel: { title: string; author: string };
}

interface BookData {
  title: string;
  authors: string[];
  imageLinks: { thumbnail: string };
  overview: string;
  infoLink: string;
}

const BookCard: FC<BookCardProps> = ({ novel }) => {
  const [bookData, setBookData] = useState<BookData | null>(null);
  useEffect(() => {
    getBookData(novel.title, novel.author)
      // @ts-ignore
      .then((data) => setBookData(data))
      .catch((err) => handleError());
  }, []);

  return (
    <div className="flex flex-row max-w-md overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="w-1/3">
        {bookData?.imageLinks ? (
          <ProgressiveImage
            placeholderImg={
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            src={bookData?.imageLinks?.thumbnail || bookImg}
            alt={bookData.title}
            className={"w-full h-full object-cover"}
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>

      <div className="w-2/3 p-4">
        {bookData ? (
          <h1 className="text-xl font-bold text-white">
            {bookData.title}{" "}
            <span className={"text-accent text-sm text-gray-400"}>(novel)</span>
          </h1>
        ) : (
          <Skeleton className="w-[100px] h-2" />
        )}

        {bookData ? (
          <p className="mt-2 text-gray-200 line-clamp-4 text-[16px]">
            {bookData.overview}
          </p>
        ) : (
          <>
            <Skeleton className="mt-4 h-1 bg-blue-300" />
            <Skeleton className="mt-2 h-1 bg-blue-300" />
            <Skeleton className="mt-2 h-1 bg-blue-300" />
            <Skeleton className="mt-2 h-1 bg-blue-300" />
          </>
        )}
        {/*<div className={"flex  justify-between items-center mt-3"}>*/}
        {/*  {bookData ? (*/}
        {/*    <div className="flex item-center">*/}
        {/*      {[...Array(startFilled)].map((star, index) => (*/}
        {/*        <svg*/}
        {/*          className="w-5 h-5 text-yellow-400 fill-current"*/}
        {/*          viewBox="0 0 24 24"*/}
        {/*          key={index}*/}
        {/*        >*/}
        {/*          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />*/}
        {/*        </svg>*/}
        {/*      ))}{" "}*/}
        {/*      {[...Array(startsEmpty)].map((star, index) => (*/}
        {/*        <svg*/}
        {/*          className="w-5 h-5 text-gray-500"*/}
        {/*          viewBox="0 0 24 24"*/}
        {/*          key={index}*/}
        {/*        >*/}
        {/*          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />*/}
        {/*        </svg>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    <>*/}
        {/*      <Skeleton className={"w-2 h-3 bg-amber-200 mx-[-5px]"} />*/}
        {/*      <Skeleton className={"w-2 h-3 bg-amber-200 mx-[-5px]"} />*/}
        {/*      <Skeleton className={"w-2 h-3 bg-amber-200 mx-[-5px]"} />*/}
        {/*      <Skeleton className={"w-2 h-3 bg-amber-200 mx-[-5px]"} />*/}
        {/*      <Skeleton className={"w-2 h-3 bg-amber-200 mx-[-5px]"} />*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*  {bookData ? (*/}

        {/*  ) : (*/}

        {/*  )}*/}
        {/*</div>*/}

        <p className={"text-accent text-[16px] mt-2 flex items-center gap-2"}>
          <span className={"text-[16px] font-bold text-white "}>Author:</span>
          {bookData ? (
            bookData.authors?.map((author, index) => (
              <span key={author} className={"ml-1 capitalize"}>
                {author}
                {index !== bookData.authors.length - 1 ? "," : ""}
              </span>
            ))
          ) : (
            <div className={"flex gap-2"}>
              <Skeleton className={"w-[50px] h-2 bg-violet-100"} />
              <Skeleton className={"w-[50px] h-2 bg-violet-100"} />
            </div>
          )}
        </p>
        {bookData ? (
          <Link href={bookData.infoLink} target={"_blank"}>
            <RiGooglePlayFill
              className={
                "text-blue-400 hover:text-black hover:bg-gray-500 cursor-pointer mt-4"
              }
              size={32}
            />
          </Link>
        ) : (
          <Skeleton className="w-5 h-5 rounded bg-blue-300" />
        )}
        {/*<div className={"flex flex-row  items-center gap-2 mt-3"}>*/}
        {/*  {bookData && bookData.streamingOptions.in && (*/}
        {/*    <span className={"text-[16px] font-bold text-white "}>*/}
        {/*      Watch options:{" "}*/}
        {/*    </span>*/}
        {/*  )}*/}
        {/*  {bookData ? (*/}
        {/*    bookData.streamingOptions.in?.map((option, index) => {*/}
        {/*      let OTT = <></>;*/}

        {/*      if (option.service.id === "netflix") {*/}
        {/*        OTT = (*/}
        {/*          <RiNetflixFill*/}
        {/*            className={*/}
        {/*              "text-red-600 cursor-pointer hover:text-gray-500"*/}
        {/*            }*/}
        {/*            key={option.service.id}*/}
        {/*            size={28}*/}
        {/*          />*/}
        {/*        );*/}
        {/*      } else if (option.service.id === "prime") {*/}
        {/*        OTT = (*/}
        {/*          <SiPrime*/}
        {/*            className={*/}
        {/*              "text-blue-400 cursor-pointer hover:text-gray-500"*/}
        {/*            }*/}
        {/*            size={38}*/}
        {/*          />*/}
        {/*        );*/}
        {/*      } else if (option.service.id === "apple") {*/}
        {/*        OTT = (*/}
        {/*          <SiAppletv*/}
        {/*            className={*/}
        {/*              "bg-white text-black p-[2px] rounded-xl cursor-pointer hover:text-gray-500"*/}
        {/*            }*/}
        {/*            size={28}*/}
        {/*            key={option.service.id}*/}
        {/*          />*/}
        {/*        );*/}
        {/*      }*/}
        {/*      return (*/}
        {/*        <Link*/}
        {/*          key={option.service.id + index}*/}
        {/*          href={option.link}*/}
        {/*          target={"_blank"}*/}
        {/*        >*/}
        {/*          {OTT}*/}
        {/*        </Link>*/}
        {/*      );*/}
        {/*    })*/}
        {/*  ) : (*/}
        {/*    <div className={"flex gap-2"}>*/}
        {/*      <Skeleton className={"w-[50px] h-2 bg-red-600"} />*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default BookCard;
