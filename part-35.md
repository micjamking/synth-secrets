# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Mar02/articles/synthsecrets0302.asp][0]_****

**![](http://media.soundonsound.com/sos/mar02/images/synthsnaredrumheader.gif)

If you thought synthesizing realistic bass drums was complex, that's _nothing_ compared to snares. So how is it that the analogue snare sound is so well known? And how _do_ you go about creating it? We find out... This is the 35th article in a 63-part series. Read [all parts][1].**

**Synthesizing Drums: The Snare Drum**

**

---

****_Gordon Reid  
_**

For the past two months, we've been discussing the science and synthesis of bass drums, so it is almost inevitable that we're now going to move onto the snare drum. Actually, strike the word 'almost' from the last sentence. It _is_ inevitable. After all, these two types of drum form the basis of almost all the percussion tracks in pop and rock music. Sure, we need metalwork such as hi-hats and cymbals to embellish the rhythm, and toms provide needed variation for fills and other effects, but it is the bass and snare combination that provides the drive and 'oomph' of most percussion tracks.

Before embarking on any discussion of the snare drum, I recommend that you go back over the instalments of this series from last November, and January this year (see [www.soundonsound.com/sos/nov01/articles/synthsecrets1101.asp][2] and [www.soundonsound.com/sos/jan02/articles/synthsecrets0102.asp][3] respectively). This is because many of the concepts used this month were explained in detail in those articles, particularly those concerning quasi-harmonic series and the use of the frequency-shifter.

Now, armed with an understanding of pitched membranophones and -- more importantly -- an unpitched membranophone (the bass drum) we're ready to begin our analysis of the snare drum.

Like the orchestral bass drum, the snare has two complete heads. And, as on the bass drum, the upper surface is the _batter_ head. However, whereas the bass drum had a carry head, the lower head on the sna[![](http://media.soundonsound.com/sos/mar02/images/synth123s.gif)][4]re drum is called the _snare_ head. This is because, unlike a carry head, it has a snare of chains or cables stretched across it, and it is these that give the drum its distinctive sound. Indeed, without the snares, the snare drum sounds much like a shallow, dual-headed tom -- and in fact, we'll start this month by omitting the snare and considering the drum as if it _were_ a tom.

**The 'Snare-Less' Drum Modes**

If you've just re-read January's instalment of this series, or have been following my previous analyses of drums month by month, you will not be surprised if I tell you that the snare drum's two heads are coupled by the enclosed air between them. Furthermore (and this is not something that we have discussed in the past) the heads are also coupled by the shell of the drum itself. This means that the frequency distribution of the drum's modes is quite unlike the modified Bessel distribution of a single suspended membrane.

Experiments show that, like the orchestral bass drum, the snare drum produces two frequencies for each of the 0,1 and 1,1 modes, and that the modes are distributed enharmonically. To illustrate this, I have shown in Figure 1 (right) the nine frequencies produced by the first seven modes of a typical 'snare-less' snare drum.

As you can see, the modes have no obvious relationship to one another. However, if I ignore the two components at approximately 180Hz and 330Hz produced by the 0,1 mode (I'll come back to these in a moment), and separate the remaining frequencies into two series, something interesting happens (see Figures 2(a) and 2(b), right).

As you can see, the result is two series whose partials appear to be evenly spaced. This should, perha[![](http://media.soundonsound.com/sos/mar02/images/synth4s.gif)][5]ps, be no surprise. When we did the same for the bass drum two months ago, we obtained a similar quasi-harmonic series. OK, the snare drum appears to produce two such series, rather than the bass drum's single series, but the principle remains the same.

Unfortunately, the near-harmonicity of the snare drum's two series is an illusion, because the distances between the components in Figure 2(a) are 125Hz, 109Hz and 107Hz, and those in Figure 2(b) are 101Hz and 114Hz. Nonetheless, the distribution is even enough to suggest a way to use harmonic oscillators to imitate the 'non-snare' part of the snare drum sound.

Figure 3 (below) shows the method I used to create the quasi-harmonic series for the bass drum in January, and it is equally applicable to (or indeed equally inapplicable to) each of the two series in Figures 2(a) and 2(b). The difference is that we need two frequency-shifters producing different amounts of shift; one for each of the series.

If we also append a couple of sine-wave oscillators to add back the 0,1 modes that I rather casually removed a few paragraphs ago, we obtain the architecture shown in Figure 4 below, and the spectrum shown in Figure 5(a) on the next page.

At this point, you may wonder how I obtained the oscillator frequency of 111Hz in Figure 5(a), and the frequency offsets of 175Hz and 224Hz. There's nothing mystical about this; I just calculated the closest fit for the f[![](http://media.soundonsound.com/sos/mar02/images/synth5s.gif)][6]requency differences between the components in the series (which turns out to be 111Hz) and the offsets that provide the best matches to the frequency table from which Figure 1 was drawn.

We can now see how closely (or not) this conforms to the true spectrum -- see Figure 5(b). You will probably agree that -- on paper, at least -- my synthesis corresponds reasonably well to reality, although I have no doubt that your ears would be able to tell the difference.

Unfortunately, the potential modular synth in Figure 4 is rather complex. Furthermore, due to the presence of the dual frequency-shifters, it's more than a little pricey.

Unfortunately -- again -- if we stick to this method of synthesis, there is little or nothing we can do to reduce the cost. Indeed, measurements of real snare drums suggest that, for a realistic sound, we must add further modules and _increase_ the complexity rather than reduce it. This is because the frequencies produced by the 0,1 mode decay far more quickly than the other partials... sometimes at more than twice the rate. Although this means that they are rather short-lived (which makes it tempting to eliminate them altogether), we can't do this, because it would remove depth and bottom end from the sound. So, to synthesize the correct response, we have to pass the outputs from the sine-wave oscillators through a second VCA whose gain is controlled by another Attack-Release generator, one with a quicker Release than the first one (see Figure 6 on the next page).

At this point, the architecture in Figure 6 is starting to look a little too elaborate for my tastes. OK, it's[![](http://media.soundonsound.com/sos/mar02/images/synth6s.gif)][7] not the most convoluted patch I've ever created for Synth Secrets, but given that it's just a single element within a more complex sound, I'm worried that things might get out of control.

So let's look at this sound in a different way. After all, we are considering a limited number of partials, and that suggests that additive synthesis might provide a more suitable solution to the problem. But even the nine partials in Figure 1 require nine oscillators, nine amplifiers and nine contour generators. These would allow us to program exactly the right frequencies, amplitudes and decay rates, but, including the final mixer, this would require 28 modules (see Figure 7). Given the high price of frequency-shifters, this may still work out somewhat cheaper than the 12 modules shown in Figure 6, but it's far from a practical solution. Oh yes... and my choice of working with nine partials is arbitrary. In reality, the drum produces scores of partials. So it seems that we are stuck with Figure 6\.

Unfortunately, no integrated synthesizer can create this patch, suggesting that the _only_ way to progr[![](http://media.soundonsound.com/sos/mar02/images/synth7s.gif)][8]am snare drum sounds is to use racks full of modules from manufacturers such as Analogue Systems and Doepfer, or spend ages messing around with flexible software synths such as Native Instruments' _Reaktor_. Yet experience tells us that we can create reasonable approximations to snare drums using fairly basic synthesizers. So maybe there's another way?

Two other mechanisms that suggest themselves are FM synthesis and ring modulation. We know from previous discussions that both of these methods will produce large numbers of enharmonic partials, and these may be suitable for synthesizing the semblance, if not the reality, of the drum's modes. Unfortunately, I can find no combination of Carrier and Modulator that produces the correct distribution of frequencies. So, for the moment, there doesn't seem to be much point pursuing these methods further, and we appear again to have reached a dead end.

**The Effect Of The Snare**

So far this month, we've done little to move beyond the concepts of drums expounded in previous Synth Secrets. We've simply applied old ideas to a new drum of different size and proportions, but one which exhibits [![](http://media.soundonsound.com/sos/mar02/images/synth8s.gif)][9]very similar physics to those described before. But now we're going to consider the snare itself -- the arrangement of cables stretched under the drum.

Let's first study the properties of a stretched circular membrane that has a single cable of some sort stretched just underneath its lower surface, as shown in Figures 8(a) and 8(b).

Let's now consider what happens to the centre of the drumhead, and to the centre point of the cable, if we displace them by, say, smacking the upper one with a large stick. Since we're striking the drumhead directly from above, we force it down, distorting it from its rest position. At some point in its downward travel, it will then strike the cable, and push this from its rest position. Provided that the drumstick is still pushing down on the head, the two will then continue to distort together until the stick bounces off.

Now, since both objects are under tension and (to a greater or lesser extent) elastic, both will try to return to rest. Of course, they don't do this instantaneously, and both will oscillate above and below their rest positions until all their energy is dissipated.

Let's now assume that, by some coincidence of mass, elasticity and tension, the head and the cable respond in similar fashion, oscillating as shown in Figure 9 (right). This shows that the head starts to return to rest as soon as the stick leaves its surface, while the cable continues to move downward for a short time longer before it too oscillates and returns to rest.

In this scenario, the head and the cable do not interact with each other after the initial impact and displacement. This, as you will appreciate, is not very interesting. It simply describes two dissimilar oscillators that happen to produce the same frequencies as they radiate away their energy.

However, since drumheads and cables are very different objects, this scenario is extremely unlikely. Indeed, since the head is a two-dimensional oscillator whose oscillations are described by modified Bessel functions, and the cable is a one-dimensional harmonic oscillator, I would venture (without any proof, you understand) that it is impossible. So we now have to consider what happens in the real world when the head and the cable attempt to oscillate at different frequencies.

Sometime after the initial stick impact, the cable will leave the lower surface of the head and then, some time later, snap back to strike it. At this moment, the head and the cable will pass energy to each other, exciting new modes of vibration, and thus new oscillation frequencies. A short time later, they will strike each other again, exciting yet more new frequencies, and so it goes on until all the energy is dissipated. I have shown a hugely simplified representation of this in Figure 10\.

If the oscillations of the head and cable in Figure 9 are uninteresting, those in Figure 10 are anything but, so much so that it's impossible to analyse what these might be. Indeed, a tiny difference in the tensio[![](http://media.soundonsound.com/sos/mar02/images/synth9_10s.gif)][10]n of either object or the initial velocity of the stick can radically change the timing and nature of the impacts that occur as time progresses.

Now, it's a small jump of intuition to realise that the drumhead and the cable are adjusted optimally when the maximum number of head-on collisions occurs between them. This type of impact (which happens when the head and snare are moving in opposite directions) ensures that the greatest number of high-frequency modes is generated, and that the energy is radiated away most quickly. Both of these factors are vital in producing the characteristic 'snap' of the modern snare drum.

Just to demonstrate how complex a real snare drum is, I should now remind you that up until now, we have been considering _only_ the centre point of the snare head and the centre point of the cable. So now you must try to envisage how complex the motion becomes when different parts of the head are moving in different directions, different parts of the cable are moving in different directions, and numerous impacts are occurring all along the length of the cable. The resulting motion defies analysis, as does an analytical derivation of the modes and frequencies thus excited. Indeed, if an impact occurs at one point along the cable, it momentarily changes the length of the cable, so _any_ frequencies above the fundamental (subject to a high-frequency limit determined by factors such as mass and elasticity) are possible. This means that the cable is _not_ acting as a harmonic oscillator; it is closer to some form of band-limited noise generator.

Now let's make things even more complex. When playing a snare drum, we do not hit the snare head directly, and it is up to the shell and the air cavity to excite the snare head after we strike the batter head. This mean[![](http://media.soundonsound.com/sos/mar02/images/synth11s.gif)][11]s that different parts of the snare head will move in different directions as soon it starts oscillating. I have shown a hugely simplified representation of this in Figure 11\.

Of course, nothing is ever this simple (ha! ha!) and, once the batter head has excited the shell and the cavity, these in turn excite each other and the batter (again) as well as the snare head and the snare cable. And, inevitably, each time the cable hits the snare head, it excites new modes in the shell and cavity... and so on, and so on. To say that the snare drum is a hugely complex system of resonators is a bit like saying that space is big. The words are correct, but they convey no sense of the scale of things.

**Frequency Response Of The Snare Drum**

Inevitably, such a complex system produces a hugely complex spectrum. Unfortunately, the sound generation mechanism is _so_ complex that it defies the kind of analysis we've been performing over the past few months. Even academic text books shy away from this, so I think it's fair to say that, not only is a precise analysis of the snare drum outside the scope of Synth Secrets, it's outside the scope of, well... everyone. And if this is true for a single, defined strike of the batter head, think how more complex and impenetrable the subject becomes when you consider the different interactions of the shell modes, the snare head and the snare when you strike the batter head with a different velocity, or in a different position.

Clearly, our current (if somewhat simplified) understanding of the snare drum -- while correct -- is insufficient for our needs, and we need a different approach if we are to progress further. So let's ignore things we can't analyse, and consider what we _can_ state about the sound of snare drums.

Fortunately, this is where the mist begins to clear, because without knowing the mechanisms involved, we can make two important generalisations with confidence. This is because the human race has a great deal of empirical knowledge about the snare drum, ie. people have been playing them for an awfully long time, w[![](http://media.soundonsound.com/sos/mar02/images/synth12s.gif)][12]e've all heard lots of them, and they all conform to these generalisations.

The first of these is that the harder you strike a snare drum, the louder it becomes, and the more energy is radiated at higher frequencies. Figures 12(a) to 12(c), which show three measured spectra of a single snare drum, demonstrate this clearly. They show how the energy in the first few hundred Hertz of the spectrum increases as the drum is struck harder, and how a greater proportion of this energy appears at higher frequencies.

You may also note from these diagrams that the spectrum becomes more noise-like at higher impact velocities. This is because a _very_ lightly hit snare drum will barely excite the snare, so the drum modes dominate its sound. The light impact shown in Figure 12(a) will excite the snare, but the drum modes still dominate the sound. As the drum is struck harder, the widths of the peaks widen, and the sound becomes more 'noisy' as the cable's interaction with the drum becomes significant. Finally, when you strike the snare drum very hard, as shown in 12(c), the bulk of the energy is contained in a wide, noisy spectrum. So here is our second generalisation: the more that the snare interacts with the drum, the wider the modes become, and the 'noisier' the sound becomes, eventually changing into a complex noise spectrum. I suspect that most people have noticed this without ever having quantified the differences they're hearing.

Amazingly, it is these simple observations and measurements -- not our complex physical analyses -- that tell us how to synthesize the snare drum's sound. Given that we will usually want to emulate the high energy sound of the heavy impact (you want your drummer to smack the things with gusto, don't you?) we need to use a noise generator!

The simplest such solution would be to pass the noise though a simple VCA and EG combination[![](http://media.soundonsound.com/sos/mar02/images/synth13_14s.gif)][13], as shown in Figure 13\. However, while this might seen elegant and simple, it is inadequate for accurate snare drum emulations, so we need to extend the architecture somewhat further.

Figures 12(b) and 12(c) show how the amount of high-frequency energy increases the greater the impact. We can simulate this by placing a low-pass filter in the signal path, and raising and lowering the cutoff frequency according to the impact velocity we wish to simulate. It would also be interesting to place a few band-reject filters (notch filters) in the architecture (Figure 14) in order to synthesize the holes observed in the snare drum spectrum. I have placed these under voltage control so that we can move the holes around if we wish to.

This is almost certainly sufficient to produce a snare-like sound, but if we want to be sophisticated, we can put in the sound-generating mechanism from Figure 6 to that in Figure 14\. We can then add a velocity-controlled mixer, so that the proportions of the snare-less drum modes and snare-affected sounds are balan[![](http://media.soundonsound.com/sos/mar02/images/synth15s.gif)][14]ced dynamically. We now have a reasonably sophisticated model of the snare drum (see Figure 15).

Of course, this is not the end of the story, because there are many other factors that influence the sound produced by the drum. For example, we have considered the snare to be just a single cable running underneath the snare head. Modern snares comprise many parallel cables or chains, and there is no reason why these should be stretched to the same tension. Even if they are, they will not lie in exactly the same place, so they will be in different positions with respect to the snare head's modes, and will therefore hit the snare head in different positions and at different times.

Furthermore, changing the tension of the snares can have a dramatic effect, creating very different energy distributions. Indeed, if the snare is too tight, it will be almost impossible for it to part company from the snare head, and there will be no subsequent impacts to create the characteristic snare drum sound. On the other hand, if the snare is too loose, it will flap around aimlessly, and the sound will again be changed for the worse.

Then there are factors such as the size and depth of the drum shell, the tensions of the batter and snare heads, the materials from which the shell is constructed... and many, many others. In fact, even the way in which the drum is supported will have a noticeable effect, and a snare drum on a rigid stand will sound different from the same drum supported on a flexible, elastic mount. This is because, on the conventional stand, a significant amount of energy is lost through mechanical coupling of the drum to the stand itself.

So now it's time to move on, firm in the knowledge that, while we understand very little of the detailed interactions that occur in a snare drum, we are in a position to synthesize a reasonable approximation of the sound. But I'm afraid that that will have to wait until next month... ![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/Mar02/articles/synthsecrets0302.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://www.soundonsound.com/sos/nov01/articles/synthsecrets1101.asp
[3]: http://www.soundonsound.com/sos/jan02/articles/synthsecrets0102.asp
[4]: http://media.soundonsound.com/sos/mar02/images/synth123.gif
[5]: http://media.soundonsound.com/sos/mar02/images/synth4.gif
[6]: http://media.soundonsound.com/sos/mar02/images/synth5.gif
[7]: http://media.soundonsound.com/sos/mar02/images/synth6.gif
[8]: http://media.soundonsound.com/sos/mar02/images/synth7.gif
[9]: http://media.soundonsound.com/sos/mar02/images/synth8.gif
[10]: http://media.soundonsound.com/sos/mar02/images/synth9_10.gif
[11]: http://media.soundonsound.com/sos/mar02/images/synth11.gif
[12]: http://media.soundonsound.com/sos/mar02/images/synth12.gif
[13]: http://media.soundonsound.com/sos/mar02/images/synth13_14.gif
[14]: http://media.soundonsound.com/sos/mar02/images/synth15.gif