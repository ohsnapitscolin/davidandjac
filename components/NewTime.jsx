const NewTime = () => {
  return (
    <div className="border-2 p-8 flex flex-col items-center mb-8 text-center">
      <span className="text-xl uppercase font-brunswick inline-block mb-4">
        The wedding is at a new time!
      </span>
      <p className="font-alpina-italic text-center mb-4">
        <i>
          Hudson is having a surprise evening Flag Day parade... which of course
          is ongoing during our ceremony, outside our wedding venue.
        </i>
      </p>
      <p className="font-alpina-italic text-center mb-4">
        <i>
          Because of this, we’re moving the day up 1 hour (from 5pm to 4pm) to
          ensure everyone can get there as smoothly as possible and we can have
          our ceremony with (hopefully) a bit of peace and quiet. Thank you all
          for your flexibility!
        </i>
      </p>
      <a
        className="font-alpina-italic underline decoration-1 underline-offset-[3px] text-sm"
        href="https://docs.google.com/document/d/114yrqwCUTpAWzTCQTAhqVccy2TBLTWSKV4ohHseOoio/edit?tab=t.0#heading=h.hit28d17jl6e"
      >
        Transportation guide
      </a>
    </div>
  );
};

export default NewTime;
