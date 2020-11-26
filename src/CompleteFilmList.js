import dieHard from './assets/images/die-hard.webp';
import jingle from './assets/images/jingle-all-the-way.webp';
import blkXmas from './assets/images/black-christmas.webp';
import eyes from './assets/images/eyes-wide-shut.webp';
import miracle from './assets/images/miracle-on-34th-street.webp';
import lampoons from './assets/images/national-lampoons-christmas-vacation.webp';
import scrooged from './assets/images/scrooged.webp';
import whiteXmas from './assets/images/white-christmas.webp';
import tokyo from './assets/images/tokyo-godfathers.webp';
import nightmare from './assets/images/nightmare-before-christmas.webp';
import klaus from './assets/images/klaus.webp';
import grinch from './assets/images/grinch.webp';
import frost from './assets/images/jack-frost.webp';
import clause from './assets/images/the-santa-clause.webp';
import polar from './assets/images/the-polar-express.webp';
import noel from './assets/images/un-conte-de-noel.webp';
import carol from './assets/images/carol.webp';
import apartment from './assets/images/apartment.webp';
import trading from './assets/images/trading-places.webp';
import metropolitan from './assets/images/metropolitan.webp';
import comfort from './assets/images/comfort-and-joy.webp';
import silence from './assets/images/blast-of-silence.webp';
import maud from './assets/images/ma-nuit-chez-maud.webp';
import wonderful from './assets/images/its-a-wonderful-life.webp';
import homeAlone from './assets/images/home-alone.webp';

const CompleteFilmList = [
  {
    title: 'Die Hard',
    pic: dieHard,
    description:
      "John McClane gets more than he bargained for while away to pick up his ex-wife at her office Christmas party. A quality Alan Rickman doing some mentally hammy accents meets Bruce Willis, who at the time was considered a laughable choice for the role as he'd only been in a daft romantic comedy.",
    pairings: 'Some boring lagers, a burger and crisps.',
  },
  {
    title: 'Jingle All The Way',
    pic: jingle,
    description:
      "Arnie stars in a film which at best makes no sense and at worst is quite upsetting. Making the list out of a combination of nostalgia and the fact that the late, great Phil Hartman plays a philandering house-husband 100% straight, the film's bizarre charm somehow helps you overlook the fact that it also features Jim Belushi and Jake Lloyd.",
    pairings:
      'Red Stripe (for the scene where Arnie gives it to a reindeer) and home-made cookies',
  },
  {
    title: 'Black Christmas',
    pic: blkXmas,
    description:
      'Sorority-house slasher whose menacing phone calls and wise-cracking teens predate Scream. Very vibey, still holds up, and stars a pre-Superman/Amityville Margot Kidder. Subdued 70s lighting and gaudy set design set the mood perfectly, and another great entry into the pantheon of horror films which came out to pearl-clutching critical panning then slowly grew from cult following to widespread acclaim.  ',
    pairings: 'Weird Beard Brewing Co. Black Christmas Stout',
  },

  {
    title: 'Eyes Wide Shut',
    pic: eyes,
    description:
      "Surreal and contentious Kubrick thriller. Regardless of one's overall opinions on the film, it stands as a noticeable oddball on the list and, I feel, helps to offset some of the more on-the-nose inclusions. Kubrick's flair for lighting (and just about everything else) combined with Hollywood A-listers playing very rich people makes for an unsettling dreamlike haze throughout, but I think it's the real-life marital tension between Kidman and Cruise which push it over the edge and onto the list.",
    pairings:
      'A nice selection of up-market booze, maybe a decent wine or cognac.',
  },
  {
    title: 'Miracle on 34th Street',
    pic: miracle,
    description:
      'Smashing remake that plays the "Christmas thing" straighter than most, a cut from the Second Golden Age of John Hughes. An always on-form Mara Wilson shares excellent chemistry with a Richard Attenborough who seems to have walked off the set of the previous year\'s Jurassic Park and into a Santa suit, still in character.',
    pairings: 'Milk and Maryland cookies for that American wean feeling.',
  },

  {
    title: "National Lampoon's Christmas Vacation",
    pic: lampoons,
    description:
      "A solid entry in a series of films which hold up surprisingly well (written by...oh, that explains it), my dad's favourite and a great case for forgetting that Chevy Chase is a real-life arsehole. Easy-watching comedy of errors with no surprises, except for Johnny Galecki and Juliette Lewis playing the weans in this one.",
    pairings:
      "A properly-cooked turkey, to make up for the one they didn't manage in the film. Can be eaten in sliced form in a sandwich.",
  },
  {
    title: 'Scrooged',
    pic: scrooged,
    description:
      'The winner of several Dickens adaptations which were considered. Any collection which includes Chevy Chase has to similarly tip the cap to the anti-Chevy. A bit tonally confused at times, which if anything just adds to the story, and nobody plays "Are we meant to cheer for this character or not?" quite like Bill Murray.',
    pairings:
      "Charles Dickens' alleged favourite cocktail - the Smoking Bishop",
  },

  {
    title: 'White Christmas',
    pic: whiteXmas,
    description:
      "An old classic I haven't actually seen, but I love the song. According to Wikipedia, this was the first film ever to be released in VistaVision...what more is there to be said? Enormously popular and long overdue a watch.",
    pairings:
      'A traditional Christmas nog - with no alcohol - for a wholesome 50s feeling.',
  },
  {
    title: 'Tokyo Godfathers',
    pic: tokyo,
    description:
      "Japanese animated one I haven't seen but critically acclaimed and seemed to be a popular feature on the various lists consulted. Keen to see what a non-European, non-American take on Christmas is (in this film at least).",
    pairings: 'A sake - not very Christmassy, but VERY Japanese',
  },

  {
    title: 'The Nightmare Before Christmas',
    pic: nightmare,
    description:
      'A Tim Burton effort from around the time it was still cool to be Tim Burton, and a particularly nice vibe collision for me as I used to be really scared of it as a boy.',
    pairings: 'A big roast pumpkin dinner - Halloween meets Christmas.',
  },

  {
    title: 'Klaus',
    pic: klaus,
    description:
      "A modern Netflix thing with a killer cast. Haven't seen it yet. Spanish director but English language...an 'alternative origin story' is what I've read about it so far...I think it could be a nice entry into a fairly over-stuffed canon.",
    pairings: "A San Miguel - in honour of the film's Spanish roots.",
  },

  {
    title: 'How the Grinch Stole Christmas',
    pic: grinch,
    description:
      "A classic referenced in Home Alone 2 and remade into a competent Jim Carrey romp (with which it competed for a place on this strict no-duplicates list). Bit of imagination required for the pairing but surely worth it. Can't rememember if Dr. Seuss is cancelled or not (I think he is) but a classic character all the same. ",
    pairings:
      'A three-decker toadstool and sauerkraut sandwich ... with arsenic sauce.',
  },

  {
    title: 'Jack Frost',
    pic: frost,
    description:
      'A fairly lame family romp with very "special" special effects, rescued from ridiculous obscurity by a Michael Keaton performance utterly devoid of self-consciousness. The bonus points which nudged it onto the list come from my looking for it in a video rental shop (a real, 90s, VHS video rental shop) and stumbling across the slasher flick of the same name - fond memories for a budding horror fan.',
    pairings: 'A snow cone...brrr.',
  },

  {
    title: 'The Santa Clause',
    pic: clause,
    description:
      "Tim Allen was once arrested for trying to smuggle hunners of ching through an airport. My enduring mental association with him, but not enough to spoil this film. Logged a lot of views of this one growing up, but can't remember it too well now. Looking forward to it all coming rushing back to me - the cast is very promising.",
    pairings: 'A ceaser salad, with dressing on the side.',
  },

  {
    title: 'The Polar Express',
    pic: polar,
    description:
      "Tom Hanks mo-cap modern fairytale. Somehow managed to miss out on it over the years. Posters remind me of Snowpiercer but its regular inclusion on Auntie Beeb's Christmas telly rotation suggest that tonally, they may be quite different.",
    pairings:
      'A nice warming Christmas hot choc, with lots of marshmallows & cream.',
  },

  {
    title: 'Un Conte de Noël',
    pic: noel,
    description:
      'A French drama film I saw on the BFI list of Top 10 Independent Christmas films (and a few others - seems popular!). Translates to "A Christmas Tale" and features a large multi-generational family meeting up for a Christmas dinner. I reckon it will be a bit light-hearted but not sure.',
    pairings: 'Something French - Brie and a Kronenbourg?',
  },

  {
    title: 'Carol',
    pic: carol,
    description:
      'An "alternative Christmas romance" film starring Cate Blanchett and Rooney Mara with high praise from critics. Mid-century period piece, which is not usually for me, but think it will work really well. Nominated for bags of prestigious awards and a ringing endorsement from Kermode earned it a spot on this list. Also based on a Patricia Highsmith novel, which can only be a good thing. ',
    pairings: 'Super-dry martinis, per the period',
  },

  {
    title: 'The Apartment',
    pic: apartment,
    description:
      'An Oscar-winning Jack Lemmon/Shirley MacLaine feature, which I saw once years ago on a Billy Wilder bender. Can\'t remember a lot about it but the premise and subject matter leave a lot of room for an excellent Christmas "thinker".',
    pairings:
      'A bourbon Old-Fashioned...seems pretty old. And a wee bit of fruitcake.',
  },

  {
    title: 'Trading Places',
    pic: trading,
    description:
      'Dan Aykroyd and Eddie Murphy at the peak of their SNL powers meet a Jamie Lee Curtis who was still thought of almost exclusively as a "scream queen", none of whom were the studio\'s first choice for the roles but manage to generate an unforgettable chemistry throughout. (In saying that, the leads were originally meant to be Wilder and Pryor...) Dated humour in places but a quality watch overall.',
    pairings:
      "A rich man's drink, and a poor man's drink - a Duvel and an El Dorado",
  },
  {
    title: 'Metropolitan',
    pic: metropolitan,
    description:
      "Another BFI recommendation that I haven't actually seen. Low-budget exploration of 1990s Upper East Side debutante malaise, think it's set in just one apartment...sounds promising. Get ready for a thinker.",
    pairings:
      'Some fancy, Great Gatsby-esque cocktails. Definitely a Manhattan.',
  },

  {
    title: 'Comfort and Joy',
    pic: comfort,
    description:
      'Bill Forsyth film from 1984, set in Glasgow, somehow managed to slip under my radar - despite a score by Mark Knopfler (of course) and turns for Clare Grogan, Rikki Fulton and Alex Norton. I feel like I can already play this film start to finish in my head, but ready for some surprises.',
    pairings: "Irn-Bru and some Tunnock's Snowballs.",
  },

  {
    title: 'Blast of Silence',
    pic: silence,
    description:
      "From the BFI's list of ten great independent Christmas films. Moody and short - sounds right up my street. Think this will be intense a nice break from Christmas cheer, depending on where in the calendar it gets placed. I've chosen this pairing based on my image of a private dick from other noirs...not sure how appropriate it will be!",
    pairings: 'Whisky - neat.',
  },

  {
    title: 'Ma Nuit Chez Maud',
    pic: maud,
    description:
      'One of two French entries on the list, sounds like a classic opposites-attract kind of thing, and one synopsis I read mentioned Marxism - VERY ahead of its time. Went all out with the pairing on this one. Hoping for a downer meets a thinker, meets one of those films which leaves you feeling cleverer for having watched it.',
    pairings: 'An "Opposites Attract" Cointreau cocktail',
  },
  {
    title: "It's A Wonderful Life",
    pic: wonderful,
    description:
      '"It\'s in Bill\'s house! And Fred\'s house! ...what the hell are you doing with my money in your house Fred? \n" "Good morning Mr. and Mrs. Winfield! Good morning Moe\'s Tavern!" and so on...pleasant memories of Christmas Eves gone by, in addition to Simpsons episodes. A cartoonishly evil villain and a pleasingly flawed main character (for the time). An all-American classic directed by an immigrant who might have been one of the only people to ever really live the American dream. Undeniably brilliant and a perfect entry for the main course...',
    pairings: '"Mulled wine; heavy on the cinnamon, light on the cloves."',
  },

  {
    title: 'Home Alone',
    pic: homeAlone,
    description:
      "The all time, undisputed, greatest champion of them all. Absolutely everything that a Christmas film could or should be - humanity, humour, sentimentality and warmth perfectly captured in 103 minutes. Career-defining performances from just about everyone in the cast (only Pesci and Candy came close to this level in their other output), a flawlessly-paced script from John Huges and a wonderfully hip soundtrack that still somehow pays due respect to the greatest hits. Not only the best Christmas film of all time, but very possibly the best film of all time. Well, it's either that or Space Odyssey.",
    pairings:
      "Absolutely anything you want. You've earned it. Have yourself a merry little Christmas.",
  },
];

export default CompleteFilmList;
