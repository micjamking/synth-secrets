# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Nov01/articles/synthsecrets1101.asp][0]_

Synth Secrets turns its attention to the synthesis of percussion instruments, beginning with pitched drums. This is the 31st article in a 63-part series. Read [all parts][1].

![](http://media.soundonsound.com/sos/nov01/images/synthdrumsheader.gif)_**

---

Gordon Reid**_

Over the past seven months, I've been applying the principles of synthesis to recreate the sounds of two, very important classes of musical instruments: those whose primary oscillators are blown pipes and plucked strings. Having discovered that it's possible to synthesize the first of these classes quite well, and the second class not at all, it's now time to turn elsewhere. This month, I'll begin looking into the sounds and synthesis of percussion instruments.

**What Are Percussion Instruments?**

It's tempting to think in rather narrow terms when discussing percussion instruments. However, given that these are the oldest musical instruments developed by mankind, it shouldn't surprise you to discover that there are more instruments in the percussion family than there are in any other.

I'll start with a definition: a percussion instrument is one that produces its sound when the player strikes some part of it. Mind you, such definitions are almost inevitably incomplete. For example, when the drummer in a jazz trio plays the snare drum by sweeping brushes on its upper skin, it is still a percussion instrument. Similarly, when a violinist creates a musical effect by striking the strings with the bow, the violin is not a percussion instrument, despite being played percussively.

[**![](http://media.soundonsound.com/sos/nov01/images/fig01mode01.s.gif)**][2]

**Figure 1: The 0,1 mode --- the fundamental --- with frequency ratio 1.00f. To understand this and the other diagrams in this article, imagine that you are looking down on a drum skin and that when the white parts are vibrating 'up' at any given moment, the grey parts are vibrating 'down', and _vice versa_.**

Ignoring such annoying complications, I will follow the academic practice established in some texts and define four primary percussion groups. These are the _membranophones_ (more commonly called drums), the _idiophones_ (instruments such as glockenspiels and xylophones, plus metallic percussion such as cymbals, high-hats and gongs), the _aerophones_ (whistles), and the _chordophones_ (primarily the piano family). You might think it odd that the piano is considered a percussion instrument, but then how else could you reasonably classify something that uses hammers to produce its sounds?

Having divided percussion instruments into these primary groups, it's possible to further sub-divide the membranophones and idiophones into four sub-groups: those that produce pitched sounds, and those that do not. For example, kettle drums (or 'timpani') are _pitched_ membranophones, whereas bass drums, snare drums, and toms are not. Likewise, bells, glockenspiels, xylophones and even gongs are pitched idiophones, whereas cymbals and high-hats are not. It's not necessary to sub-divide the aerophones and chordophones in this way, because these use columns of air and strings as their respective primary resonators, so it's safe to assume that they generate pitched sounds.

But you can also sub-divide the membranophones in a different way; by considering their physical construction. Some --- such as timpani --- have a single membrane and an air cavity enclosed by a rigid body. Others --- such as toms and congas --- have a single membrane with air at atmospheric pressure on both sides. Yet a third sub-class --- bass drums, snares and so on --- have enclosed air trapped between _two_ membranes.

[**![](http://media.soundonsound.com/sos/nov01/images/fig02mode02.s.gif)**][3]**[![](http://media.soundonsound.com/sos/nov01/images/fig03mode03.s.gif)][4]**

**Figures 2 and 3: The 0,2 and 0,3 modes, with frequencies of 2.30f and 3.60f respectively.**

Likewise, you can further sub-divide the idiophones into shaken instruments (rattles), scraped instruments (rasps), concussion instruments (claves) and struck instruments (such as the aforementioned glockenspiels and xylophones). I strongly suspect that there are other sub-sub-groups, but I'm sure you get the general idea.

So there are numerous groups of percussion to consider --- certainly far too many for a single instalment of Synth Secrets. Indeed, there are whole academic text books devoted to the subject, and, while these make a brave stab at covering the physics of each group, they do not attempt to describe the synthesis of the instruments' sounds. Therefore, rather than try to achieve the impossible --- ie. a complete description of all percussive instruments --- I'm going to take a single sub-class, and attempt to synthesize this. The sub-class is the pitched membranophone, and the specific instrument is the kettle drum.

**Pitched Drums **

Before proceeding, I'm going to jump back a couple of years to Part 2 of this series, and recap some of the basic acoustics of the circular membrane (see _Sound On Sound_ June '99, or surf to [www.soundonsound.com/sos/jun99/articles/synthsecrets.htm][5]). Incidentally, it's important to remember that every time I say 'circular membrane', it's shorthand for 'a circular membrane fixed at its edge'. This is because the physics of the unsupported membrane is quite different from that of the fixed one.

[**![](http://media.soundonsound.com/sos/nov01/images/fig04mode11.s.gif)**][6]**[![](http://media.soundonsound.com/sos/nov01/images/fig05mode21.s.gif)][7]**

**Figures 4 and 5: The 1,1, and 2,1 modes, with frequencies of 1.59f and 2.14f respectively.**

If you can remember that far back, you'll recall that the difference between a harmonic oscillator (such as a stretched string) and a circular membrane is one of dimensions: the string has just one, whereas the membrane has two. The consequence of this is that, whereas the overtones of the string occur at integer multiples of the fundamental frequency 'f' and therefore sound pitched or musical to our ears, the overtones of the membrane occur at 'enharmonic' frequencies that hold no obvious relationship to the fundamental, and therefore rarely sound musical to us. Of course, while it may not be obvious, the ratios of the frequencies are far from haphazard; they are determined by those hideously complex equations, the Bessel Functions, as described in Part 2 of this series.

Let's now look at some of the membrane's simpler modes of vibration, using the terminology from Part 28 of this series (see _SOS_ August '01, or head to [www.soundonsound.com/sos/aug01/articles/synthsecrets28.asp][8]). The simplest is the 0,1 mode. This has no radial modes of vibration (ie. ones whose nodes, or points of zero displacement, bisect the centre of the membrane), and just one circular mode, with its node at the fixed edge (see Figure 1, right).

[**![](http://media.soundonsound.com/sos/nov01/images/fig06mode22.s.gif)**][9]

**Figure 6: The 2,2 mode, with frequency 3.50f.**

The next two modes lacking radial components are, as you might expect, called the 0,2 and 0,3 modes, and these have frequencies of 2.30f and 3.60f respectively (see Figures 2 and 3 below).

So what about the radial modes? The 1,1 and 2,1 modes are very simple, as you can see from Figures 4 and 5 (above), but things start to look decidedly more complex when you mix circular and radial modes, such as 2,2 (see Figure 6, on the next page).

If I now take the frequencies of a selection of low-order modes and chart their relative relationships (see Table 1, below), you can see that the result is quite unlike that of a string or pipe. As you already know, the circular membrane is _not_ a harmonic oscillator.

Since numerous modes will be excited every time you strike the membrane, it's likely that all the modes in Figure 7 below (and many others not shown), will be present when you hit the skin of a membranophone. Moreover, since the relationships of the frequencies are enharmonic, it's equally likely that, unless one mode dominates to the exclusion of all others, you will hear an atonal sound with no recognisable pitch. Hang on... didn't I say that the idea was to synthesize _pitched_ membranophones? What's going on?

To answer this, it's necessary to investigate the nature of the instrument itself. In Part 2 of this series, I considered the physics of the membrane itself. But a kettle drum introduces many other factors... There is atmosphere on one side of the membrane, there are the lumps of wood and metal called the shell of the drum, and there's an enclosed volume of air within the drum itself. So, stepping far beyond our previous discussions of circular membranes, it's time to look at the drum as a whole.

****MODE
FREQUENCY RELATIVE TO 

THE FUNDAMENTAL

0,1
1.00

1,1
1.59

2,1
2.14

0,2
2.30

3,1
2.65

1,2
2.92

4,1
3.16

2,2
3.50

0,3
3.60

5,1
3.65

3,2
4.06

6,1
4.15

**

**Table 1: The relative frequencies of 12 low-order modes of a circular membrane.**

The Kettle Drum --- Initial Spectrum**

Although it has long been known that drums are essentially enharmonic, the tonal nature of timpani was understood more than two centuries ago. Researchers recognised that the 1,1 mode was producing the principal frequency, with two strong overtones at ratios of 3:2 (a perfect fifth), and 2:1 (an octave) above the principal. This is an amazing result, not least because the principal is not the fundamental, which lies at approximately 63 percent of the principal frequency. But the most important question this raises is; how have the enharmonic modes suddenly become harmonic?

Let's look at the frequencies of these overtones in terms of the fundamental frequency, 'f'. If the principal is the 1,1 mode then, from Table 1, you can see that this lies at a frequency of 1.59f. Consequently, the observed overtone that lies a fifth above the principal must be at approximately 2.39f, and the octave overtone must lie at 3.18f (ie. double the principal frequency). The ideal membrane has natural modes that lie close to these frequencies, but it is one thing to be _close to_, and quite another to be _at_. Furthermore, you might well ask what has happened to all the other modes. To understand the mechanisms involved, you must consider five primary factors:

• Firstly, the membrane no longer vibrates in isolation: one side is enclosed by air;

• Secondly, the other side of the membrane is enclosed by the air within the shell;

• Thirdly, the kettle is a resonant volume, so the air within it will itself have resonances that interact with the vibrations of the membrane;

• Fourthly, the membrane acts like the string in Figure 12 of last month's Synth Secrets... it has a finite stiffness at its edges. This means that it appears slightly smaller at higher frequencies (and higher amplitudes) than at lower ones, thus sharpening the partials produced by the higher modes;

**FREQUENCY OF IDEAL
FREQUENCY
FREQUENCY RELATIVE
FREQUENCY SHIFT 

MODE
MEMBRANE RELATIVE
RELATIVE TO
TO PRINCIPAL OF
RESULTING FROM 

TO FUNDAMENTAL
PRINCIPAL
MEMBRANE IN AIR
SUSPENSION IN AIR (%)

1,1
1.59
1.00
1.00
0

2,1
2.14
1.34
1.47
+10

3,1
2.65
1.66
1.91
+15

4,1
3.16
1.98
2.36
+19

**

**Table 2: A selection of the radial modes of a real membrane suspended in open air, and their relative frequencies.**

• Fifthly, stretched membranes don't like to wrinkle, so they are resistant to the vibrational modes that attempt to make them do so (the 0,1 mode is one of these, as you can probably imagine if you mentally increase the magnitude of the displacement until the membrane looks hemispherical; consider the wrinkles you would create at the edge of a circular piece of paper if you wrapped it over the top of a globe, and you'll see what I mean).

If you think that several of these factors look familiar, you're right. The kettle drum shares many attributes with the acoustic guitars I've been discussing recently. Admittedly, there are significant differences: in particular, the strings of the guitar are harmonic, and its body has a sound hole. Nonetheless, the similarities are striking: in both cases you excite a primary oscillator which interacts with a complex set of air resonances, and the resulting vibrations radiate outwards as the sound you hear. A kettle drum also has a hole that stops the membrane bulging or bowing as the weather --- and therefore the atmospheric pressure --- changes. However this is small, is located at the bottom, and has little effect on the sound.

At this point, let's take our hypothetical ideal membrane, suspend it in free air, strike it, and measure the frequencies of the resulting modes. In practice, the action of moving the air on each side shifts the modes considerably, raising the radial modes much closer to harmonic relationships (see Table 2, above). They're still too flat to fool the ear into thinking that it's listening to a true harmonic oscillator, but the sound nevertheless conveys a strong sense of tonality without ever quite sounding like a pure tone.

[**![](http://media.soundonsound.com/sos/nov01/images/fig07relativefreq.s.gif)**][10]

**Figure 7: The relative frequencies of the 12 low-order modes, depicted graphically.**

If you now take this membrane and further enclose one side by attaching it to the rim of a kettle drum, you force it to interact with the modes of vibration of the air within the body of the drum. The physics of this is complex, but it should be relatively simple to see that, if a mode in the trapped air has the same 'shape' at its boundary with the membrane as one of the membrane's own modes, they will interact strongly. For example, the air mode in the kettle drum in Figure 8 (shown below) will interact with the 1,1 mode of the membrane from Figure 4\. Indeed, the membrane's 1,1 mode is instrumental in exciting the air mode shown, and if their frequencies are similar, they will interact even more strongly, reinforcing one another until their energy is dissipated.

Experiments show that the air modes that couple to the n,1 membrane modes are always of higher frequency than the membrane modes themselves. The air modes therefore 'drag' the membrane modes to even higher frequencies than those shown in Table 2, sharpening them further, and bringing them very close to the harmonic ideal (see Table 3, below).

Now, you might wonder why I have only placed radial modes into Tables 2 and 3\. There's a very good reason for this: these are the only ones that become harmonic; the circular modes do not. Knowing this, a skilled timpanist will ensure that the sound of his instrument is as musical as possible by striking the membrane almost precisely a quarter the way from the edge to the centre. In doing so, the timpanist suppresses the circular modes, ensuring that the quasi-harmonic radial modes dominate the sound (see Figure 9, below). On the other hand, striking a kettle drum in the centre of its membrane depresses (by and large) the radial modes in favour of the enharmonic (and, as we shall see in a moment, short-lived) circular modes. So, if you want to produce a dull, toneless, and musically uninteresting thump, hitting the timp dead centre is the way to do it.

**[**![](http://media.soundonsound.com/sos/nov01/images/fig10decaytimes.s.gif)**][11]

**Figure 10: How the decay times of the kettle drum's modes differ.**

The Kettle Drum --- The Shape Of The Sound**

As you can see from the differences in Tables 2 and 3, the body of the kettle drum acts as a fine-tuning agent that forces the overtones of the membrane into an almost perfect harmonic series. However, it does far more than this and (like an acoustic guitar enclosure) has a strong effect on the duration and decay of the sound.

Consider this: a rigid body like the shell of a drum increases the ability of the attached membrane to radiate sound into the atmosphere. This is a good thing for an instrument, because it means that more of us, spread over a larger area, can hear it. This isn't so important in today's era of clip-on microphones and 10,000W PA systems, but it was vital for the orchestras of the 18th and 19th centuries.

However, if an instrument radiates its energy more quickly, the sound will --- for obvious reasons --- decay more rapidly. What's more, the increase in radiative capability is not consistent across the spectrum and, while most modes will decay more rapidly than they would otherwise do, some will decay _far_ more rapidly. This leads to a change in the harmonic structure of the sound as the note progresses.

[**![](http://media.soundonsound.com/sos/nov01/images/fig08timpanimode01.s.gif)**][12]

**Figure 8: The enclosed air mode that interacts with the membrane's 1,1 mode.**

Figure 10 (shown above) represents the decay times for a number of low-order modes in a kettle drum. As you can see, the desirable radial modes have long decay times compared with the undesired, enharmonic, circular modes. This means that, when you strike a kettle drum, there is a short period of enharmonicity --- that is, a burst of atonal sound that is much like noise --- followed by a longer period of the tonal sound associated with the instrument. This information may be represented in a diagram called a spectrogram, as shown in Figure 11 (above right).

Since it's possible that you haven't encountered a spectrogram before, I'll explain what Figure 11 represents. The vertical axis is the frequency axis, and the horizontal axis depicts time. Therefore, at any position along the time axis, you can look up the chart to see what frequencies are present, and in what proportions. Clearly, at the start of the 'note', many frequencies are present. However, these decay rapidly, allowing the quasi-harmonic modes to emerge as the dominant sound before they too decay.

This is all relatively straightforward, but look to the far right of the spectrogram. Just before the note decays to silence, the principal 1,1 mode vanishes, leaving the 2,1 and 3,1 modes to linger. This means that the perceived pitch of the note may leap a fifth or even an octave as it decays. Just to complicate matters still further, there are psychoacoustic effects that, under certain conditions, make the brain 'reinsert' the missing principal mode. Unfortunately, or maybe fortunately, there's no space to describe those effects here.

**[**![](http://media.soundonsound.com/sos/nov01/images/fig09timpanispectrum.s.gif)**][13]

**Figure 9: A representation of the initial spectrum of a correctly played kettle drum.**

Other Tuned Membranophones**

It should come as no surprise to learn that timpani are not the only pitched membranophones, although others are relatively rare in European music. However, tuned percussion has long been of greater importance in cultures further east than it has in European musical traditions. There are many pitched Indian percussion instruments, and these are enjoying a surge of interest in electronic music. You only have to inspect the waveforms stored in the ROMs of every modern samploid synth and workstation to see how omnipresent the sounds of tablas and similar Indian instruments have become. However, while these share many properties with timpani, they are very different instruments... they're smaller, lighter, and played with the hands rather than beater sticks.

The small size of these instruments has a very important effect: it reduces the effect of the air loading. This means that, if I measured the membrane's modes and inserted the results in another table, they would more closely represent the Bessel functions of the theoretical ideal than does the large membrane shown in Table 2, and so produce less musical, tonally enharmonic overtones. Consequently, manufacturers will load the membrane with materials such as gum or even sticky rice laced with minerals. Once applied, these stiffen the drumhead and add weight, increasing the frequencies of the partials until they more closely resemble harmonics. If a single application is insufficient, it's likely that multiple layers will be added until the desired tonality is achieved.

****FREQUENCY OF IDEAL FREQUENCY FREQUENCY RELATIVE FREQUENCY SHIFT 

MODE
MEMBRANE RELATIVE
RELATIVE TO TO PRINCIPAL OF
RESULTING FROM 

TO FUNDAMENTAL
PRINCIPAL
TIMPANI
ATTACHING TIMPANI (%)

1,1
1.59
1.00
1.00
0

2,1
2.14
1.35
1.50
+11

3,1
2.65
1.67
1.98
+19

4,1
3.16
1.98
2.44
+23

**

**Table 3: A selection of the radial modes of a real kettle drum, and their relative frequencies.**

Pitched Membranophones In Performance**

At this point, you might feel that I've described everything necessary to synthesize the sound of the pitched membranophone, but sadly, this is not the case. Just as in the discussion of the acoustic guitar, the relative amplitudes of the modes that you hear will depend upon the position from which you're listening to the drum. This is because each of the modes possesses a different radiation pattern. So, while in one position you may hear lots of 2,1 and very little 3,1 mode, in another position the situation could be reversed. This means that, at any given moment, no two listeners hear precisely the same sound. This is particularly apparent in the open air, whereas a concert hall will reduce the differences in perceived sound by bouncing the partials around its walls and other surfaces. Unfortunately, as discussed in Synth Secrets 22 (see _SOS_ February '01, or [www.soundonsound.com/sos/feb01/articles/synthsecrets.asp][14]) this leads to other problems, as the room imposes its own modes upon the sound generated by the instrument.

[**![](http://media.soundonsound.com/sos/nov01/images/fig11timpanispect.s.gif)**][15]

**Figure 11: A spectrogram of the sound of timpani. **

Finally, before you can synthesize the sound of pitched membranophones, it's important to consider one more aspect that defines their sounds: the performance. Some drums, when hit harder, initially produce a higher pitch than they do when hit softly. This is largely a consequence of the fourth factor described earlier: ie. that the membrane appears slightly smaller at higher amplitudes than it does at lower amplitudes. However, this is far less relevant to a kettle drum than it is to other drums. This is because the air modes within the cavity act as stabilisers, forcing the oscillations to the equilibrium frequencies determined by their interactions with the membrane modes. This means that, when considering the striking force, only the amplitude of the resulting sound is important, not the frequency or harmonic spectrum.

Nonetheless, most pitched membranophones can be played over a small range of frequencies. On Eastern instruments, the player controls this by exerting pressure on the membrane with the palm of the playing hand. On timpani, the tuning mechanism is pedal-operated, and offers a range of approximately half an octave. So when you come to synthesize the pitched membranophones, you need to incorporate a way to change the pitch smoothly over a small range. However, given that I've now run out of space, that will have to wait until next month. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][16]

[0]: http://www.soundonsound.com/sos/Nov01/articles/synthsecrets1101.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/nov01/images/fig01mode01.l.gif
[3]: http://media.soundonsound.com/sos/nov01/images/fig02mode02.l.gif
[4]: http://media.soundonsound.com/sos/nov01/images/fig03mode03.l.gif
[5]: http://www.soundonsound.com/sos/jun99/articles/synthsecrets.htm
[6]: http://media.soundonsound.com/sos/nov01/images/fig04mode11.l.gif
[7]: http://media.soundonsound.com/sos/nov01/images/fig05mode21.l.gif
[8]: http://www.soundonsound.com/sos/aug01/articles/synthsecrets28.asp
[9]: http://media.soundonsound.com/sos/nov01/images/fig06mode22.l.gif
[10]: http://media.soundonsound.com/sos/nov01/images/fig07relativefreq.l.gif
[11]: http://media.soundonsound.com/sos/nov01/images/fig10decaytimes.l.gif
[12]: http://media.soundonsound.com/sos/nov01/images/fig08timpanimode01.l.gif
[13]: http://media.soundonsound.com/sos/nov01/images/fig09timpanispectrum.l.gif
[14]: http://www.soundonsound.com/sos/feb01/articles/synthsecrets.asp
[15]: http://media.soundonsound.com/sos/nov01/images/fig11timpanispect.l.gif
[16]: http://www.soundonsound.com