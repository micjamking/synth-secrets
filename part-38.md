# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Jun02/articles/synthsecrets0602.asp][0]_

**Synthesizing Realistic Cymbals**

---

_**Gordon Reid  
**_

### This is the 38th article in a 63-part series. Read [all parts][1].

Last month, we began looking at the complex way in which a cymbal produces its sound. We considered some of its modes of vibration via the wonders of holographic interferometry, and also analysed how the various modes develop after a cymbal is struck (broadly summarised in Figure 1, shown below).

Using this information, it's now possible to attempt to synthesize a cymbal. For reasons of simplicity, I have chosen to try creating a ride cymbal, because, to my ears, this class of cymbals produces less complex timbres than either crash or splash cymbals. What's more, its shorter duration makes it simpler for me to fool the ear into hearing what I want it to. 

**The Initial Waveform**

I'll start by deciding how to create the initial waveform. We know from last month's studies th
[![](http://media.soundonsound.com/sos/jun02/images/fig01developments.gif)][2]

Figure 1: A rough representation of   
the way in which the cymbal sound   
develops, as first shown in last month's   
article. Note that the scale of the horizontal   
axis is logarithmic, not linear.

at that the cymbal's sound is a dense fog of enharmonic partials, and that it is not dominated by any particular modes. The easiest way to produce these is by using FM synthesis. If I take an unfiltered pulse wave and use it to modulate an unfiltered square wave at high amplitude, I can generate hundreds of partials across the whole bandwidth of the synth I use, as explained in Part 12 of this series (see _SOS_ April 2000, or head for [www.soundonsound.com/sos/apr00/articles/synthsecrets.htm][3]).

At this point, it's important to acknowledge that the cymbal's spectrum extends above the normal limit of human hearing (for more on this, see the box on supersonic research opposite), and that its energy distribution is fairly flat. This means that I need to produce a flat (-ish) spectrum of FM partials, and must choose my modulator and carrier frequencies carefully to attain this.

Many analogue synths are incapable of satisfying this requirement; some exhibit a maximum cutoff frequency of just 12kHz or thereabouts, which (ignoring any other limitations) makes them unsuitable for the job at hand. So I have decided to use a digital synth with a full 20Hz-to-20kHz response to create the cymbal patch -- Clavia's Nord Micro Modular (reviewed in _SOS_ July 2000, or see [www.soundonsound.com/sos/jul00/articles/clavia.htm][4]). This software/hardware combination imitates a modular analogue synth very well, and is an ideal vehicle for illustrating the principles discussed.
[![](http://media.soundonsound.com/sos/jun02/images/synthfig02fmoscillatorss.gif)][5]

Figure 2: Creating the basic signal   
for the cymbal patch.

Figure 2 (above right) shows the oscillators I have chosen for the patch. As you can see, I have directed the output from the modulator ('OscA1') to both the pitch input and the FM input of the carrier ('OscA2'), and set the amplitude of the modulation to maximum in both cases. Using both the Nord's linear and logarithmic modulation inputs ensures that the resulting spectrum is suitably complex.

You will also note that I have selected a pulse wave set to (approximately) 1kHz for the FM modulator and a square wave set to (approximately) 2.5kHz for the FM carrier. You might wonder why I have chosen these waveforms and frequencies, and there is a simple answer... it sounds suitable to me. A more analytical approach would suggest that this choice produces the required spectral width, with just the seventh side-band of the fundamental frequencies lying at 18.5kHz. Furthermore, this choice does not concentrate clumps of partials into narrow bands of frequencies, which is probably a good thing.

**Do Supersonics Matter?**

A researcher at the California Institute of Technology, James Boyk, has measured the frequency spectrum of a crash cymbal, and found that, unlike that of other instruments, the cymbal's spectrum "shows no sign of running out of energy at 100kHz". He has also demonstrated that fully 40 percent of the sonic energy produced by a cymbal can lie above the commonly accepted threshold of human hearing at 20kHz. This raises two interesting questions. Firstly, if, as is generally accepted, most humans are unable to hear sounds above 20kHz, does the cymbal's supersonic energy still affect the audible sound in some way? Secondly, if it _does_, do we need synths, mixers, amplifiers and speakers with bandwidths exceeding 100kHz to reproduce these sounds accurately?

It's unlikely that anyone will be answering these questions at any time soon, but Boyk's research still has an important consequence when synthesizing cymbals: we must be able to create flat frequency spectra up to the accepted limit of human perception, if not beyond. This imposes constraints upon the type of synth we can use.

**Shaping The Sound**

We must now shape the output from the carrier to create the sound we want. As Figure 1 su

[![](http://media.soundonsound.com/sos/jun02/images/synthfig03signalpath1s.gif)][6]

Figure 3: Creating the initial 'ping'.

ggests, we'll do so using two signal paths: one that passes an initial burst of mid-frequency partials to imitate the initial impact, and a second that produces the decaying high and mid frequencies in the extended tail of the sound.

Figure 3 (opposite) shows the architecture I have used to generate the initial 'ping' of the cymbal. This passes the carrier's output through a 24dB-per-octave band-pass filter. I have set the base frequency of this to be approximately 1kHz, and then applied a fast Attack-Decay envelope that sweeps the pass-band down to 1kHz over the course of just one-fifth of a second. The attack is as near-instantaneous as it is possible for a Nord envelope to be.

I have used the same envelope to shape the amplitude of the sound, taking it from maximum amplitude to silence over the same period (because, as explained last month, all the energy in the 'ping' is translated into higher-frequency modes in the first few milliseconds). The output from this part of the patch is then directed to input 1 of the 'Mixer1' module.

At the same time, I have passed the carrier's output through a 12dB-per-octave high-pass filter to generate the tail of the sound. This filter (shown on the next page in Figure 4 as 'FilterD1') has a basic frequency of 2.64kHz, and the Attack-Hold-Decay envelope assigned to it ('AHD-Env1') opens it from this setting to its maximum over the course of approximately 200 milliseconds. This emulates the way in which the energy of the initial impact generates the higher partials. The filter then closes slowly -- I have chosen a setting of 3.7 seconds -- returning to its basic cutoff frequency.

Having created the two signal paths, I have combined them as shown in Figure 5 on the next page, using the 'Mixer1' module to mix the elements in suitable proportions. You will note that I have given th
[![](http://media.soundonsound.com/sos/jun02/images/synthfig04signalpath2s.gif)][7]

Figure 4: Creating the high-frequency   
tail of the sound.

e tail a greater amplitude than the 'ping', and again this is simply because it sounds correct.

The final element in the audio path is a further Attack-Decay envelope generator ('AD-Env2') that shapes the combined sound. This has a near-instantaneous attack, and a decay of around three-quarters of a second, which seems about right for the cymbal we're emulating. You may ask why the tail of the sound produced in Figure 4 is so long if it is then truncated so severely by the 'AD-Env2' module. I have found that this produces a natural envelope when you re-trigger the sound: longer gaps between notes allow the pass-band to drop to lower frequencies than short gaps do, and this introduces a subtle but natural variation into the sound. Again, this seems to make sense, but it would probably take too long to analyse why it should be so.

Now, rather than play the patch from a keyboard, I have chosen to drive it using a sequencer clocked by an LFO. You can see these in the upper-left corner of Figure 5\. If you look closely, you can see that I have programmed a six-beat sequence with the cymbal triggered every first, fourth and sixth beat. This produces the classic 'tsccchhhh t-t tsccchhhh t-t tsccchhhh' so beloved of jazz and swing drummers, which is a perfect test for a ride-cymbal patch.

So, how does it sound? To be honest, the result is not as realistic as I had hoped, largely because the initial FM spectrum is not quite close enough to the real thing. Instead, this patch is not unlike that obtained from a high-quality analogue drum machine. It's recognisably not a real cymbal, but it does exude what you might call 'cymbal-ness', and would no doubt work well in a mix. What's more, it achieves this without recourse
[![](http://media.soundonsound.com/sos/jun02/images/synthfig05cymbalpatchs.gif)][8]

Figure 5: Combining everything   
into a single patch.

to a noise generator, and produces better results, to my ears at least, than those from the drum machines that use noise for cymbal sounds (of which more next month). Finally, I think it's an improvement on the drum oscillator provided within the Nord architecture.

Figure 6 (below) now shows the sound-generating modules from Figure 5, but drawn in standard Synth Secrets format, so that you can apply this patch yourself to something other than the Nord Modular. You can see the dual signal paths, with the upper path creating the 'ping', and the lower the extended tail of the sound.

Of course, this is not the end of the story -- in fact, it's the beginning. Given time and patience, I'm sure that I could create a far more realistic ride cymbal on the Nord. It might require more signal paths, or even complete new synthesis mechanisms including further oscillators as well as filters and so on... but I'm confident that it could be done. Unfortunately, this would take us so far beyond the capabilities of typical analogue synths that it would be meaningless for anybody lacking a Nord Modular, Native Instruments' _Reaktor_, or about £25,000 of extended Moog System 55\.
[[![](http://media.soundonsound.com/sos/jun02/images/fig06blockdiagrams.gif)][9]

][9]

Figure 6: Laying out the Nord Modular cymbal   
patch in standard Synth Secrets format. 

More realistically, we could adjust the parameters of this patch to generate staccato timbres that sound like a closed hi-hat, or to create open hi-hats and other types of cymbal. And, of course, there's nothing stopping you creating similar (or better) patches on suitable analogue (or virtual analogue) synths.

But what if you don't own a big modular synth -- analogue or digital? Does this mean that cymbal sounds are forever beyond your reach? Next month, we'll look at Figure 6 in closer detail and, as we have done before, see whether we can simplify the patch sufficiently to create convincing cymbal sounds on low-cost analogue synths. Until then...[![](http://media.soundonsound.com/images/regulars/sos_end.gif)][10]

[0]: http://www.soundonsound.com/sos/Jun02/articles/synthsecrets0602.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/jun02/images/fig01development.gif
[3]: http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm
[4]: http://www.soundonsound.com/sos/jul00/articles/clavia.htm
[5]: http://media.soundonsound.com/sos/jun02/images/synthfig02fmoscillators.gif
[6]: http://media.soundonsound.com/sos/jun02/images/synthfig03signalpath1.gif
[7]: http://media.soundonsound.com/sos/jun02/images/synthfig04signalpath2.gif
[8]: http://media.soundonsound.com/sos/jun02/images/synthfig05cymbalpatch.gif
[9]: http://media.soundonsound.com/sos/jun02/images/fig06blockdiagram.gif
[10]: http://www.soundonsound.com