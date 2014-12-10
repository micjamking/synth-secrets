# More Creative Synthesis with Delays  
_Original article: [http://www.soundonsound.com/sos/jun04/articles/synthsecrets.htm][0]_

In the penultimate instalment of this long-running series, we delve deeper into what can be achieved with just a few delays and some creative routing... This is the 62nd article in a 63-part series. Read [all parts][1].

Gordon Reid

Here we are, at the far end of our synthesizer's signal path. We've generated the waveforms, created multiple signals, filtered and sculpted them, applied modulation, mixed the results, and... well, it all sounds a bit _thin_, doesn't it? Despite the techniques we've employed, the results totally lack the depth of a nine-foot six-inch Bösendorfer, or a four-manual cathedral organ. Yet, if you think back to the early 1960s, there was --- apart from a choir or the string section of an orchestra --- little that was musically lush, and the electronic sounds that we now take for granted were still in the future. If you wanted to record the semblance of multiple instruments playing at once, you either paid a few dozen instrumentalists to do their thing simultaneously, or you bought a MkII Mellotron. Either way, the costs were crippling.

Things began to change in the mid-1960s, when the affordable 'chorused' organ was born. Consider the way in which a cheap electric organ creates its sound. In general, the outputs of high-frequency oscillators are 'divided down' by integer factors to create the correct pitches for all the notes of the top octave of the keyboard, and these are then further divided by factors of two to generate each octave beneath. However, organ designers discovered that they could divide the master oscillators in different ways to generate two frequencies for each note that were almost, but _not exactly_ the same.

These small discrepancies --- which were not even identical from note to note --- were not dissimilar to the differences between the pitches of two pipes tuned to the same pitch, or between the three strings that comprise a note on the aforementioned Bösendorfer. Consequently, manufacturers began producing electric organs that generated a primitive chorus effect using dual sets of dividers. More sophisticated designs incorporated two independent sets of master oscillators, each with a set of frequency dividers, and some even offered a global detune for the second set (see Figure 1, on the previous page).

Of course, there was also the principle of using multiple electronic sound sources playing in unison to recreate the effect of multiple physical sound sources playing in unison. So, long before the appearance of the modern chorus effect in 1975, keyboards were using multiple oscillators per note to thicken up what would otherwise have been bland and uninteresting patches. Of these, the most sophisticated was the prototype of Ken Freeman's String Symphoniser. This used three banks of detuned oscillators, applying vibrato to each to create a rich chorus effect. To this day, synth programmers often use detune, pulse-width modulation and frequency modulation to obtain richer timbres than would otherwise be possible (see the box on the previous page).

Nevertheless, this is not what we now mean when we use the word 'chorus' and, of course, it can't be applied to externally generated signals such as a human voice or a note played on a guitar. What's more, despite the complexity of detune/vibrato/PWM programming, timbres generated in this fashion still don't sound as lush as even the cheapest and cheesiest 'string synths'. On the surface, this is rather surprising. In contrast to a sophisticated multiple-oscillator-per-note synth, the initial waveform produced within a string synth is almost always a single, 'divide-down' sawtooth which, at the best of times, sounds weedy and uninspiring. Yet, passed through the instrument's internal chorus/ensemble unit, it sounds animated, lush and full of body. So... what is chorus, and why does it sound so good? To answer that, and before Synth Secrets departs through the output socket of history, it's time that we took a look at that most popular and most useful of all keyboard effects: the chorus/ensemble.

[![Top of page](http://media.soundonsound.com/images/arttop.gif)][2]

Creating Chorused Sounds Without Chorus

[![Fig A - PWM](http://media.soundonsound.com/sos/jun04/images/figapwm.s.jpg)][3]

Figure A: Thickening the sound by modulating the duty cycle of a pulse wave.

Figure A: Thickening the sound by modulating the duty cycle of a pulse wave.

  
[![Fig B - saw+PWM](http://media.soundonsound.com/sos/jun04/images/figbsawpwm.s.jpg)][4]

Figure B: Adding another signal to further thicken the sound.

Figure B: Adding another signal to further thicken the sound.



[0]: http://www.soundonsound.com/sos/jun04/articles/synthsecrets.htm
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: #Top
[3]: http://media.soundonsound.com/sos/jun04/images/figapwm.l.jpg
[4]: http://media.soundonsound.com/sos/jun04/images/figbsawpwm.l.jpg