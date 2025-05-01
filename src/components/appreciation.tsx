export default function Appreciation() {
  return (
    <div className="md:fixed md:bottom-0 mb-14 md:mb-0 mt-6 md:mt-0 md:w-min right-0 flex   flex-col items-center  ">
      <div className="text-center ">
        <h3 className="text-sm font-mono text-text md:hidden">
          Built by Emmy Codes (me).
        </h3>
        <h3 className="text-sm font-mono text-text md:hidden">
          Designed by Brittany Chiang.
        </h3>
        <div className="md:-me-11 md:flex justify-end md:w-min md:flex-col md:items-center md:space-y-10 hidden">
          <h3 className="text-sm font-mono text-text -translate-y-14 rotate-90">
            elumezeemma@gmail.com
          </h3>
          <div className="w-px h-24 pt-7 bg-secondary md:block hidden"></div>
        </div>
      </div>
    </div>
  );
}
