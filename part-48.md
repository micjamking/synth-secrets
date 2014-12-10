# Synthesizing Bowed Strings: the Violin family  
_Original article: [http://www.soundonsound.com/sos/apr03/articles/synthsecrets48.asp][0]_

![](http://media.soundonsound.com/sos/apr03/images/synth04.gif)**Following our success at synthesizing the sound of analogue string _machines_, we hone our techniques with a view to recreating the sound of the real thing... This is the 48th article in a 63-part series. Read [all parts][1].**

**

---

****_Gordon Reid  
_**

For the past few months, we've been using synthesizers to imitate a specialised form of electronic keyboard: the string synth or string machine. Designed to generate a sound reminiscent of ensemble strings, and to appeal to players who could not afford a Mellotron, this was the instrument first developed in the 1960s by Ken Freeman and later perfected by Italian organ and accordion manufacturers such as Logan.

Nobody in their right mind would claim that string synths were indistinguishable from the massed strings of a real orchestra, but they proved to be adept at creating the impression of such things and, when played sympathetically, could almost fool you. Given that we used sawtooth waves to generate our ensemble sounds, it would seem reasonable to infer that, if multiple sawtooth waves imitate the sound of multiple string instruments, one sawtooth might imitate the sound of a _single_ string instru
[![](http://media.soundonsound.com/sos/apr03/images/fig01bowingthestring.s.gif)][2]

Figure 1: A simplified representation of a string and bow.

ment. It's reasonable... and it's correct. So, this month, we're going to study bowed string instruments and learn why --- as is fairly well known --- we use sawtooth waves to synthesize the sounds of violins, violas and cellos.

**Strings & Bow**

The violin is the most studied of all the classical instruments. Numerous books analyse and explain its shape, its construction, the materials used, the nature of the strings, the effect of the bridge, the bow, the bowing position, the differences introduced by fast and slow bowing, the effects of higher and lower bowing pressures, the effects of vibrato, pizzicato... and many other factors. In addition, there are scores of scientific papers, many of which discuss the physical modelling of these attributes. If you've ever tried to read these papers, you'll never be rude about a [![](http://media.soundonsound.com/sos/apr03/images/fig02stringmotion.s.gif)][3]

Figure 2: The bow dragging the string.

Yamaha VL7 or a Korg Prophecy again; modelling a bowed string instrument is the work of _magicians_, not mathematicians. Nonetheless, keyboard players were emulating solo violins and their close relatives many years before the advent of digital synthesis, DSPs, and physical modelling, so there must be a way to achieve acceptable results on subtractive synthesizers. So let's start --- as we have in the past --- by looking at the waveform produced by the excitation mechanism of the instrument; in this case, the string and the bow.

Figure 1 (below) shows a simplified view of a violin string and bow. The string itself is stretched taut between two anchor points, and a
[![](http://media.soundonsound.com/sos/apr03/images/fig03snapback.s.gif)][4]

Figure 3: The 'snap back' of the string.

bow of stretched horsehair is placed upon it and then dragged in a perpendicular direction across it.

Because of friction, the bow applies a displacing force to the point of contact on the string, which is stretched progressively into the shape shown in Figure 2 (below). As this happens, the string's tension generates a restoring force that tries to return it to its rest position --- ie. a straight line. This force increases as the displacement increases so, at some point, the restoring force exceeds the ability of friction to drag the string further. At this point, the string begins to slip...

The amount of friction between two objects moving with respect to one another is less than that between two objects that are stationary with respect to e
[![](http://media.soundonsound.com/sos/apr03/images/fig04motionofbowpnt.s.gif)][5]

Figure 4: The displacement diagram for the bowed point on the string.

ach other, and we call these two types of friction 'dynamic' and 'static' respectively. Think about it: a car parked by static friction on a steep hill will tend to remain stationary, but if it does start to slide, the lesser dynamic friction between it and the road will be insufficient to arrest its motion until the incline flattens out (or something more dramatic occurs on the way down!). Relating this idea to the bowed string, static friction will 'stick' the string to the bow until the returning force causes it to slip. At this point, the interaction between the bow and the string becomes one of dynamic friction, which is the lesser force, so the string will snap back. However, it does so to a point _beyond_ the original rest position because, just like a plucked string, its momentum takes it into the region where its tension slows it to a halt (see Figure 3, below left).

Once the string has reached a point somewhere beyond its rest position, the dynamic friction is great enough to stick the string to the bow for a second time. At this moment, static friction takes over, and the string is displaced again
[![](http://media.soundonsound.com/sos/apr03/images/fig05pluckwavemotion.s.gif)][6]

Figure 5: How two pulses moving in opposite directions produce the wave motion of the plucked string.

until it reaches the 'snap-back' point, and the cycle repeats.

Surprisingly, if the bowing position is in the centre of the string, the speed at which the string 'snaps back' appears to be much the same as that as which it is dragged. We can draw this motion as shown in Figure 4 above: it's a triangle motion, although it's one whose centre is offset from the rest position of the string.

Now, it's tempting to think that because the bowed point describes a triangle wave, the audio waveform generated by the string is also a triangle wave. As I showed when I analysed the plucked string, this is sometimes a reasonable conclusion... but on this occasion, it's wrong.

If you refer back to the part of this series in which I analysed the behaviour of a plucked string (see _SOS_ August 2001, or surf to [www.soundonsound.com/sos/aug01/articles/synthsecrets28.asp][7]), you'll recall that two waves --- one travelling left to right, the other right to left --- combine to produce the wave motion of a plucked string (see Figure 5 above).

But a bow
[![](http://media.soundonsound.com/sos/apr03/images/fig06bowedwavemotion.s.gif)][8]

Figure 6: The wave motion of a bowed string.

ed string is not the same as a plucked string, and the physics of its vibrations are different, because the string does not oscillate freely. Without going into the maths to prove why this should be so, there appears to be just one wave in the bowed string, and this travels around as shown in Figure 6, right. The speed with which this wave travels, and therefore its frequency, is the same as that of the freely vibrating string, and although this might seem to be a coincidence, it must be so, or it would not be possible to play pizzicato notes on a violin at the same pitch as you obtain when bowing it.

If you study Figure 6 more carefully, you can see that, as the wave travels around the string, the point under the bow describes the triangular motion in Figure 4\. This would seem to imply that the bowing speed determines the pitch of the note thus created. But we _know_ that this is wrong; any violin player will tell you that the musical pitch is not determined by the bowing speed. So what changes as you move the bow faster or more slowly? It's the point at which the string snaps back, which
[![](http://media.soundonsound.com/sos/apr03/images/fig07bowedamplitude.s.gif)][9]

Figure 7: The bowing speed affects the amplitude, not the frequency of the note.

is, if you think about it, the distance from the tip of the triangle to the string. Therefore, when the player moves the bow with greater velocity, the _amplitude_ of the wave increases, but the frequency remains constant (see Figure 7, right).

Now we can consider what happens if the player bows the string in different positions. We already know what happens when it is bowed in the centre: the bowing point moves in a triangle wave, and there are no even harmonics. This is because, as with the plucked string, all the even harmonics would require the centre of the string to be at rest, which is impossible when that is being bowed (if this explanation has lost you, it's explained in much more detail in that August 2001 instalment of this series, the one about the behaviour of the plucked string). It's possible to deduce that if the bow is one third of the distance from the bridge to the nut there can be no third, sixth, ninth, and other 'third' harmonics in the waveform. Similarly, a bowing position a quarter of the way from the bridge eliminates the fourth, eighth, 12th (and so on) harmonics. But if the bowing position is some arbitrary distance from the bridge, it is likely that _all_ the harmonics will be excited to a greater or lesser degree. This proves to be the case, but it still does not tell us what waveform the instrument produces. To determine this, we need to consider something else --- the forces acting upon the bridge which separates the strings from the body of the instrument.
**About Rosin**

The coefficient of friction of horsehair alone is too low to excite strings sufficiently to play a bowed instrument, so players cover their bows with a substance called rosin, a gum that becomes sticky just above room temperature. When warmed by the friction of the bow dragging across the string, this provides the necessary friction to pull the string out of shape. What's more, in a delicious twist of fate, the static friction of rosin rises as it gets warmer, so that it is more efficient at displacing the string during the dragging period. At the same time, its dynamic friction decreases, so the string snaps back even more smoothly than it otherwise could. Perfect!

**The Forces On The Bridge**

Consider the following two ideas:  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) While the bow is displacing the string, the resulting forces strain the bridge and pull it out of position;  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) While the string flies back, the bridge returns progressively to its rest state.

This would suggest that some sort of sawtooth wave is invoked in the bridge. And so it proves to be; scientists have observed the forces applied by the strings upon the bridges of bowed instruments, and found that they are remarkably well represented by sawtooth waves (see Figure 8, below).

Other waveforms are obtained when the bowing is applied differently, or inappropriately. For example, Figure 9 (below) shows what happens when the player fails to press the bow hard enough onto the string, allowing it to slip twice in each cycle. T
[![](http://media.soundonsound.com/sos/apr03/images/fig08bowedsawtooth.s.gif)][10]

Figure 8: The force waveform measured at the bridge of a violin.

his 'double-slip' motion does not change the pitch, but more often creates a new tone that violinists call 'surface sound'. If they had ever studied hard sync on an analogue synth, they would understand what they were hearing!

Even more extreme is the waveform resulting from _multiple_ slips of the bow; this creates tones that --- outside of avant-garde playing --- are best avoided by skilled players (see Figure 10, at the bottom of the page).

Despite the apparent completeness of this analysis, many secondary factors affect the waveform induced in the bridge. For example, the string is not a perfect oscillator with infinitely sharp cusps at the nut, bridge and bowing point, nor is the bow infinitely narrow, and these factors have a number of consequences. Firstly, the pitch of the note goes slightly flat as it becomes louder. Secondly, there is jitter in the pitch as the 'corner' of the wave in Figure 6 passes under the bow. If we were being thorough, we would also have to consider the reflection of waves at the point of string/bow contact, and the effect that these have as they bounce around in the two sections of string either side of the bow. But we won't (phew!!).

We could also consider how players obtain different sounds by tilting the bow to increase or lessen the amo
[![](http://media.soundonsound.com/sos/apr03/images/fig09doubleslip.s.gif)][11]

Figure 9: The waveform resulting from 'double-slip' motion caused by insufficient bowing pressure.

unt of hair in contact with the strings, and what happens if the player does not drag the bow perpendicularly across the strings. Actually, we've all heard the result of the latter: it's the ghastly squeal of helpless, dying felines, murdered by the enharmonic, longitudinal vibrations excited by novice violinists.

**The Vibrating Body**

Like the guitars that we studied when investigating the plucked string way back in 2001, the timbre and playability of bowed instruments are largely determined by the properties and motions of their bodies --- the top and bottom plates, the air between them and, to a lesser extent the sides
**The Bow**

Throughout this article, I have overlooked the characteristics of the bow itself. However, when you think about it, the bow provides far more than just a means to energise the strings. The wood is under tension and has resonant frequencies, as must the tensioned horsehair, and the combination of the two must interact in complex ways, influencing the way in which the string responds to the player's technique. For example, the 'bounciness' of the bow and its ability to resume its shape will determine how string players create playing styles such as spiccato and sautille. Hmm... perhaps there are good reasons why some bows are worth thousands of pounds, while you can find others for just a few quid.

, neck, and other bits and pieces. It turns out that these motions are even more difficult to model than those of the guitar, in part because there is a post in a bowed instrument that links the top and bottom plates.

This complex situation is not aided by the fact that just as on a guitar or piano, the strings of a bowed instrument interact with the body and each other, absorbing and releasing energy in complex ways that are far beyond the scope of this explanation. Nonetheless, the overall shape of the modes is quite similar from instrument to instrument within a given family. This is as it must be, or it would not be possible to recognise all violins as violins, all cellos as cellos, and so on.

Figure 11 (above right) shows a simplified represen
[![](http://media.soundonsound.com/sos/apr03/images/fig10multiflyback.s.gif)][12]

Figure 10: A waveform resulting from 'multiple fly-backs'.

tation of the low-to-mid end of a violin body response. As you can see, this is dominated by some prominent modes produced by the top and bottom plates of the instrument. If the diagram looks familiar, you shouldn't be too surprised. I drew a similar one when I analysed the acoustic guitar and, although the positions of the modes are different, the broad shape is comparable.

Despite these similarities, your ear will never mistake a Stradivarius for an Epiphone and, if you could observe the modal vibrations of each, you would quickly see (as well as hear) the differences between them. Figure 12 (above) shows one of the simpler (!) modes of the bottom plate of a violin, and this is quite different from the equivalent guitar mode.

Now, you mig
[![](http://media.soundonsound.com/sos/apr03/images/fig11violinbodyresponse.s.gif)][13]

Figure 11: A simplified representation of the low and mid-frequency response of a violin.

ht be tempted to think that if we measured the frequencies of a given instrument's modes, we could build a filter bank that would recreate the response of its body, and that passing a sawtooth wave through this filter would then create an accurate imitation of the original tone. Yes? No... not quite.

Things are never as simple as we would like, and every bottom plate mode interacts with dissimilar modes of the upper plate (which is affected by the 'f' holes present in all of the violin family), and both are affected by the modes of vibration of the air partially trapped between them, and by the sound-post inside the body. Oh yes... and unlike a guitar, the bridge of a bowed instrument has a complex ![](http://media.soundonsound.com/sos/apr03/images/fig12violinbodymode.l.gif)

Figure 12: One of the simplest violin modes!

resonant response of its own, with modes in all three dimensions. And this interacts with all the body modes, and the neck, and it passes energy back to the strings, and... Ouch! This is a recipe for a synthesis headache just as nasty as the one I got from... well, synthesizing a plucked-string response.

Ignoring these complicating factors for a moment, is it possible to isolate an instrument's body from the neck, bridge and strings, and measure its frequency response? Fortunately for the purposes of this exercise, it is; academics achieve this by suspending the body and then energising it at every frequency using a swept sine-wave oscillator. They then measure the radiated sound. In the case of the violin, the observed result is a curve with a flat response across a few hundred Hertz, a steep roll-off in the bass, and a gentler roll-off of about 9dB per octave in the upper-mid and high frequencies (see Figure 13, above left).

However, this information isn't much use, because a bowed instrument's body is _not_ energised by a single frequency --- it is energised by the energy transmitted by the bridge. This, as we have already seen, starts its life as a sawtooth wave _rich_ in harmonics
[![](http://media.soundonsound.com/sos/apr03/images/fig13-violinbodyspl.s.gif)][14]

Figure 13: A measurement of a violin body's spectrum when energised by a sine-wave oscillator.

, and is then further shaped by the resonant response of the bridge itself. This harmonically rich energy interacts with the body to generate a different response, and it is this that we must recreate if we wish to synthesize a bowed instrument accurately (see Figure 14, above).

This is still not the end of the story, because experience tells us that the sound of, say, a violin or cello is different when heard from in front or behind, above or below. Again, this makes sense... were it not so, it would be simple to set up the microphones to record the instrument, position would be irrelevant, and everybody would be a competent sound recordist. Clearly, this is not the case!

The results obtained from measuring the sound dispersion of bowed instruments at various positions leads to complex patterns. For example, experiments show that cellos radiate more energy forward at 200Hz, but more backward at 250Hz, and more upward at 800Hz. So, if you place three microphones near a cello --- one in front of, one behind, and one above the instrument --- you will obtain different timbres (although all will still be rec
[![](http://media.soundonsound.com/sos/apr03/images/fig14overallvspectrum.s.gif)][15]

Figure 14: A measurement of a violin's spectrum when played with the bow.

ognisable as sounds produced by a cello). This means that, if we want to synthesize a bowed instrument in a truly accurate fashion, we should use some sort of surround-sound processor to imitate the differences that you will hear when you move around in its soundfield. However, given my final comments (see below), and the fact that most of us would be overjoyed if we could synthesize even the tone of a badly miked-up cello from scratch, we can probably omit this step.

**Synthesizing Bowed Instruments**

Perhaps luckily for this analysis, understanding bowed instruments is not trivial. Even today, no-one can tell you precisely why a 'Strad' sounds superior to a well-crafted modern violin, even when the former may have undergone significant modifications over the past couple of hundred years.

For this reason, when we try to synthesize the violin, viola or cello, it is more fruitful to concentrate on the broad nature of the sound than it is to become over-concerned with details. I have **Wolf Tones**

Violins, violas and, in particular, cellos, suffer from the existence of so-called 'wolf tones' --- notes that are difficult to produce on a given string because the coupling of the body resonances, bridge modes, and string vibrations cause the string's energy to pass from the string to the body and back again at a frequency of a few Hertz. This creates a flutter that makes it very difficult to sustain the note correctly.

broken this down into three components, as follows:  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) Given that the bodies of guitars and bowed instruments are energised by sawtooth waves, it is vital to imitate the 'shape' of the sound generated by the bowing action, and to differentiate it from the shape of a plucked string (there are good reasons why pizzicato played on a violin or viola shares many of the sonic attributes of a banjo!).  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) Secondly, the shape of the spectrum in Figure 14 is important. The timbre of a violin is strongly linked to the dominant body resonances in the region of a few hundred Hertz, as well as the broad combination of resonances in the region of 2kHz to 4-5kHz or thereabouts. Without these (or their equivalents for the viola or cello) the sound will not be realistic.  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) Finally, we should take account of the way in which the player plays the instrument. An Irish fiddler produces a sound very different from that of a classical soloist, and Stephane Grappelli produced a sound that was markedly different from either. Perhaps the two most easily synthesized performance characteristics are glide and vibrato, so we should concentrate on imitating these as accurately as possible.

But, for now, we've run out of space, so we'll have to address these issues next time. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][16]

[0]: http://www.soundonsound.com/sos/apr03/articles/synthsecrets48.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/apr03/images/fig01bowingthestring.l.gif
[3]: http://media.soundonsound.com/sos/apr03/images/fig02stringmotion.l.gif
[4]: http://media.soundonsound.com/sos/apr03/images/fig03snapback.l.gif
[5]: http://media.soundonsound.com/sos/apr03/images/fig04motionofbowpnt.l.gif
[6]: http://media.soundonsound.com/sos/apr03/images/fig05pluckwavemotion.l.gif
[7]: http://www.soundonsound.com/sos/aug01/articles/synthsecrets28.asp
[8]: http://media.soundonsound.com/sos/apr03/images/fig06bowedwavemotion.l.gif
[9]: http://media.soundonsound.com/sos/apr03/images/fig07bowedamplitude.l.gif
[10]: http://media.soundonsound.com/sos/apr03/images/fig08bowedsawtooth.l.gif
[11]: http://media.soundonsound.com/sos/apr03/images/fig09doubleslip.l.gif
[12]: http://media.soundonsound.com/sos/apr03/images/fig10multiflyback.l.gif
[13]: http://media.soundonsound.com/sos/apr03/images/fig11violinbodyresponse.l.gif
[14]: http://media.soundonsound.com/sos/apr03/images/fig13-violinbodyspl.l.gif
[15]: http://media.soundonsound.com/sos/apr03/images/fig14overallvspectrum.l.gif
[16]: http://www.soundonsound.com