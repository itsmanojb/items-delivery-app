const HeroArea = () => {
  const ads = [
    {
      id: 1,
      banner: 'ad-1.png',
      banner_sm: 'ad-small-1.png',
    },
    {
      id: 2,
      banner: 'ad-2.png',
      banner_sm: 'ad-small-2.png',
    },
  ];

  return (
    <section className="mt-4 md:mt-0">
      {ads.map((ad) => (
        <div key={ad.id}>
          <img
            src={ad.banner}
            alt=""
            className="h-full w-full hidden sm:block"
          />
          <img src={ad.banner_sm} alt="" className="h-full w-full sm:hidden" />
        </div>
      ))}
    </section>
  );
};

export default HeroArea;
