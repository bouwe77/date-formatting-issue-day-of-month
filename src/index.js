import React from "react";
import ReactDOM from "react-dom";
import { format } from "date-fns";

function App() {
  // Kent's date string is coming from his tickets resource on Netlify functions: https://kentcdodds.com/.netlify/functions/tickets
  let kentsDateString = "2019-09-17T22:00:00.000-07:00";

  // He was formatting the date like so, which resulted in non existing dates:
  const kentsIncorrectlyFormattedDate = format(
    new Date(kentsDateString),
    "MMM Do, yyyy h:mm a (xx)"
  );

  // However, a while ago the following issue was fixed on the date-fns library: https://github.com/date-fns/date-fns/issues/784
  // TLDR; The upper case D for formatting day of month has been changed to a lower case d:
  const kentsCorrectlyFormattedDate = format(
    new Date(kentsDateString),
    "MMM do, yyyy h:mm a (xx)"
  );

  return (
    <>
      <p>Date string: {kentsDateString}</p>
      <p>Before: {kentsIncorrectlyFormattedDate}</p>
      <p>After: {kentsCorrectlyFormattedDate}</p>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
