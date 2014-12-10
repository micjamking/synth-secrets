# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/jun01/articles/synthsecrets.pt26.asp][0]_

Last month we looked at how analogue modules can reproduce the sound of a real trumpet. All very well if you own a wall-sized modular system --- but what if your means are more limited?**Gordon Reid **adapts theory to practice with a Minimoog. This is the 26th article in a 63-part series. Read [all parts][1].

[![](http://media.soundonsound.com/sos/jun01/images/fig01minimoogblock.s.gif)][2]

Figure 1: The structure of the Minimoog.

[![](http://media.soundonsound.com/sos/jun01/images/fig02thess25brasspatch.s.gif)][3]

Figure 2: The block diagram for the brass patch in last month's Synth Secrets.

Ipromised last time that we'd look next at how the brass synthesis theory I've been explaining over the last two months translates into real sounds on simple subtractive synthesizers. I'm going to start by taking as an example a single, rather basic monosynth, one with very few controls, very few control routings, and just a single signal path. This may not sound very encouraging, until I tell you that the synth is the Minimoog: very simple, very basic, and yet glorious. Since a decent treatment of brass sounds on the Minimoog takes up more than enough space for one instalment of this series, I'll be continuing next month with the Roland SH101 and the ARP Axxe.

Let's start by taking a peek at Figure 1 (see below), which represents the complete synthesis structure of the Minimoog, controls and routing. At first glance, it may look a little daunting, but you'll soon notice how limiting it is... perhaps the most limited of any multi-oscillator monosynth ever produced. If you want to prove this to yourself, try to draw the equivalent block diagram for the contemporaneous ARP Odyssey or ARP 2600!

Now, if you compare Figure 1 to the theoretical brass patch shown at the end of last month's Synth Secrets (shown again in Figure 2, on the right above ), you'll see that the idealised patch requires numerous modules and CV routings unavailable on the Minimoog. This, in turn, suggests that the Moog is incapable of creating a good brass patch. However, experience tells us that the Minimoog is one of the best brass synths in the business, so let's find out how!

**The Source Waveform**

If you cast your mind back two months, you'll remember that brass instruments generate a complete harmonic series. Since you know that the sawtooth is the only common subtractive synth waveform that does likewise, it should be no surprise that the starting point for your brass patch is a single oscillator producing a sawtooth wave (see Figure 3, right).

![](http://media.soundonsound.com/sos/jun01/images/fig03trumpetosc.l.gif)

Figure 3: The Moog's Oscillator panel.

You might ask why I don't use all three of the oscillators that the Minimoog provides. Surely this would create a richer sound, and provide more flexibility regarding the precise timbre? There are two reasons for not doing this; one acoustic, and the other practical. The acoustic reason is simple. The interaction of two or more oscillators --- which inevitably on an analogue instrument like the Minimoog will detune and drift with respect to one another --- is quite unrepresentative of the original instrument. The practical reason is also obvious; the Minimoog has no dedicated low-frequency oscillator (LFO), so we need to reserve Osc3, the Minimoog's third oscillator, for modulation duties (more on this later).

Returning to the Minimoog's Oscillator Bank, as shown in Figure 3 above, you can see that Osc1 is producing the necessary sawtooth wave. You'll also see that I have selected an octave range of 4' for this patch --- one octave higher than a piano playing the same note on the keyboard. This is because trumpets, cornets, alto saxophones and soprano saxophones produce high-pitched notes relative to other brass instruments such as tubas, horns and trombones. As for the red switches in the Oscillator Bank, these are both set to Off, which tells you that there will be no oscillator modulation (vibrato) and that Osc3 will not track the keyboard CV.

![](http://media.soundonsound.com/sos/jun01/images/fig04trumpetmixer.l.gif)

Figure 4: The Mixer section.

![](http://media.soundonsound.com/sos/jun01/images/fig055stgloudnesscontour.s.gif)

Figure 5: The loudness envelope of a note defined by a five-stage contour plus LFO.

![](http://media.soundonsound.com/sos/jun01/images/fig06performancecontrols.l.gif)

Figure 6: The Minimoog's performance control panel.

![](http://media.soundonsound.com/sos/jun01/images/fig07loudncontoursettings.l.gif)

Figure 7: The Loudness Contour settings.

[![](http://media.soundonsound.com/sos/jun01/images/fig08loudnesscontour.s.gif)][4]

Figure 8: The loudness contour.

Moving on, the Minimoog's Mixer section allows you to select which of the oscillators contributes to the audio signal path. It also allows you to add noise and external signals into the mix (see Figure 4, left). As you can see, only Osc1 is set to On, and its loudness is set to five on a scale of zero to 10\. This is because the Minimoog's oscillators are capable of overdriving its filter input at higher levels. The mild distortion thus generated is desirable for some sounds, but not on this occasion.

**Shaping The Waveform: Loudness**

To filter and shape the sawtooth waveform, I use two modules: the Minimoog's low-pass Filter section, and its audio amplifier, called the Loudness Contour. Traditionally, because it lies next in the signal path, I would now consider the filter. However, for reasons of clarity (and also consistency with last month's analysis), I'm going to start with the loudness contour.

You may recall from last month that you can use a five-stage contour generator and an LFO with an associated contour generator and VCA to create a good approximation of a brass instrument's changes in loudness. Figure 5 shows the loudness envelope thus defined. I also discussed the need for some form of loudness sensor, such as keyboard velocity sensitivity, to allow expression to be added.

Unfortunately, the Minimoog does not have a five-stage loudness contour, nor does it offer any form of loudness sensor, nor does it have an LFO that can add tremolo! Before describing the best that the Minimoog _can_ do, I'm going to jump down to the control panel immediately to the left of the keyboard to determine whether the Decay switch is on or off (see Figure 6, right).

The reason for this is obvious if you know the Minimoog. Far from offering the desired five-stage contours, the Minimoog has only three-stage Attack/Decay/Sustain controls in its contour generators; it cannot even produce a four-stage ADSR contour, as found on most other synths. The best that it can do, when the Decay switch is set to On, is re-apply the Decay time as a Release stage when you lift your finger from a key. Because I know that a real brass sound ends very rapidly once you stop blowing the instrument, I want the synthesized sound to do likewise, so I set the Decay switch to Off.

The only two important parameters in the Loudness Contour section (see Figure 7, above right) are Attack, which should be set to 100 milliseconds, and Sustain Level, which should be set to 10 on a scale of zero to 10\. Because the Sustain is at its maximum level, the Decay Time is irrelevant, and the Release Time, as discussed in the previous paragraph, is effectively instantaneous, no matter what the setting for the Decay knob may be. The resulting contour is as shown in Figure 8 (above right). Yikes! It's not much like Figure 5 --- but it will have to do.

**Shaping The Waveform: Tone**

At this point, you may be wondering how on earth the Minimoog can produce a passable imitation of a brass instrument. If it can, surely it must be because the filter section can produce a close approximation to the ideal? Well, let's see...

You'll recall from the last two months that louder notes have more harmonics than quieter ones. Furthermore, you know that louder notes have higher proportions of higher harmonics than do quieter notes. But there's nothing we can do about this on the Minimoog, because it has no performance controls --- velocity or pressure sensitivity, for example --- to allow you to introduce this sort of expression. Indeed, there's _no_ way to make the intensity of your playing affect the harmonic content of the sound. Fortunately, there are four things that can be done to approximate the tone of a brass instrument.

• FILTER CONTOUR  
We can use the Minimoog's Filter contour generator to allow the higher harmonics to enter the sound in a reasonably realistic fashion. Figure 9 (below) shows the Minimoog's Filter section set up for a brass sound. As you can see, the cutoff frequency is set to -5 (on a scale of -5 to +5) so this is equivalent to 0 percent on most other synths. In other words, the low-pass filter is completely closed unless modulated by some external device. At the same time, the Amount Of Contour control is set to 6.5 (on a scale of 0 to 10) so the associated Contour Generator will sweep the cutoff frequency when you press a note. Remembering that the Decay switch in the performance control panel is set to Off, you can say that the filter contour has an Attack of 600 milliseconds, a Decay of 800mS, a Sustain Level of 5, and an instantaneous Release. I've drawn the resulting contour in Figure 10 below. It's exactly what we want, as shown in Figure 13 last month.

![](http://media.soundonsound.com/sos/jun01/images/fig09brassfiltersection.l.gif)

Figure 9: The Minimoog filter section.

[![](http://media.soundonsound.com/sos/jun01/images/fig10brassfiltercontour.s.gif)][5]

Figure 10: The filter cutoff frequency contour.

[![](http://media.soundonsound.com/sos/jun01/images/fig11brassfilterprofile.s.gif)][6]

Figure 11: The filter's resonant cutoff profile.

![](http://media.soundonsound.com/sos/jun01/images/fig12controllers.l.gif)

Figure 12: Defining the modulating signal.

• RESONANCE  
You will see in Figure 9 that the Resonance is set to 2 (out of 10). This suggests that there is a slight bump in the filter cutoff profile, as shown in Figure 11 on the next page. Again, this is very close to the response that the theory and measurement of real brass instruments says we require.

• FILTER TRACKING  
In part 24 of this series, I discussed how the harmonic content of a brass note changes with pitch and concluded that, to reproduce a brass instrument accurately, the filter cutoff frequency must track the keyboard CV at slightly less than a 1:1 ratio. For example, if one note is an octave higher than another (ie. the frequency doubles), the filter should open by a factor slightly less than two... say, to 190 percent of its previous value.

The Minimoog does not offer a variable filter tracking, but instead has four options, selected using the Keyboard Control 1 and Keyboard Control 2 switches in the Filter section. If both switches are set to Off, the filter cutoff frequency does not track the keyboard. If switch 1 alone is on, the filter tracks at 33.3 percent of the keyboard CV. If switch 2 alone is on, the filter tracks at 66.7 percent of the keyboard CV. Finally, if both switches are on, the filter cutoff frequency follows the keyboard CV at exactly 100 percent. The closest approximation to the theoretical ideal is 100 percent, so I have set both switches to On. This means that the resonant 'hump' in the filter profile always lies in the same position relative to the note being played, and that is --- by and large --- as it should be.

• FILTER MODULATION  
Last month, I described how a 'settling time' is required at the start of every note played on a brass instrument, and showed how a rapid modulation applied to the filter cutoff frequency could imitate this. I also used a contour generator and a VCA to ensure that this 'rasp' lasted just a fraction of a second.

On the Minimoog, Osc3 can provide the necessary signal to modulate the filter. The bad news is that there is no electronic way to contour its output; it looks as though the filter is either modulated, or not. But don't give up yet...

The filter may be modulated by the output from the Controllers section (shown in Figure 12, above) if the Filter Modulation switch (seen in the Filter section back in Figure 9) is on. The important knob in Figure 12 is the one marked Modulation Mix, which determines whether the modulating signal comprises Osc3's output, the output from the noise generator, or a mixture of the two. I have set the control to 0, giving us just the output of Osc3\.

I now need to revisit the Oscillator Bank to set up Osc3 for modulation duties (see Figure 13, above). There are four controls to consider. Firstly, the Osc3 Control switch is off, so the frequency of the oscillator does not track the keyboard CV. This means that the modulation is consistent, no matter what notes we play on the keyboard. Next, the 32' frequency range and the fine-tuning setting of -1 define the frequency I want to use in order to achieve the desired effect. Finally (as discussed last month) the triangle waveform is the one that best allows us to imitate the rasp of a brass instrument.

So far, so good... but I don't want the 'rasp' modulation to last for the entire duration of the note, or it will sound very unnatural. So how do I overcome the lack of a contour generator and VCA to control this?

The answer lies in the performance controls to the left of the keyboard. If you return to Figure 6, you'll see that there's a control wheel labelled 'Mod'. This allows you manually to control the level of the modulating signal. I've shown the architecture of this in Figure 14 on the next page. It may not look much like Figure 15 (the 'growl' section from last month's Synth Secrets) but, with skilful application of the mod wheel, the result can be much the same.

![](http://media.soundonsound.com/sos/jun01/images/fig13osc3aslfo.l.gif)

Figure 13: Using Osc3 as an   
audio-rate LFO.

[![](http://media.soundonsound.com/sos/jun01/images/fig14controlthemodlevel.s.gif)][7]

Figure 14: Using the Mod wheel to control the modulation level.

[![](http://media.soundonsound.com/sos/jun01/images/fig15vcfgrowlfromss25.s.gif)][8]

Figure 15: Adding 'growl' to the sound.

[![](http://media.soundonsound.com/sos/jun01/images/fig16harmonicrisetimes.s.gif)][9]

Figure 16: Higher harmonics take longer to 'speak' than lower ones.

[![](http://media.soundonsound.com/sos/jun01/images/fig17minimooggrtrumpet.s.gif)][10]

Figure 17: The complete Minimoog brass patch.

**Amp & Filter Together**

Ignoring the effect of the filter modulation, let's now consider the combined action of the Loudness Contour and Filter sections, and see what happens to any given harmonic within the spectrum of the initial sawtooth wave.

You know that, at the instant that you press a key, the low-pass filter is almost closed (but not completely, because keyboard tracking is set to 100 percent On). Therefore, the fundamental plus a handful of the lowest harmonics pass immediately through to the audio signal VCA, and their rise time is determined by the Loudness Contour's Attack speed of 100mS. Then, because the filter opens more slowly than the amplifier (the filter's Attack is set to 600mS) the higher harmonics are let through one by one over the course of about half a second. Furthermore, different harmonics are emphasised as the cutoff frequency is swept, all of which is as we would expect in a real brass instrument. Figure 16 on the next page (which shows the response of real brass instruments) shows a simplified representation of this, and confirms that the Loudness Contour and Filter are set correctly.

**Pitch Modulation & Noise**

At this point, it would be useful to add the shaped noise described last month. Unfortunately, while you can add noise in the Minimoog's Mixer, it lacks the formant shaping of the turbulent noise in a real brass instrument, and sounds very unnatural. Consequently, it is best omitted.

It would also be beneficial to add delayed pitch modulation (vibrato), but I have run out of facilities... the Minimoog has only one modulation source, and no spare contour generators or VCAs, so it simply isn't capable of this. Sure, I could sacrifice the growl for a steady vibrato, but I can't have growl and vibrato simultaneously. Or can I...?

Let's return to the performance controls in Figure 6 where, next to the Mod wheel, you'll find the Pitch wheel. With a bit of practice, it's possible to introduce vibrato manually, by moving this wheel backwards and forwards very slightly! This isn't as strange as it may sound --- it's not dissimilar to what a guitarist does by bending strings, after all --- and it can produce vibrato that is much more natural than that generated using an LFO. Indeed, with practice, you can alter the amount and speed of the vibrato, as the music requires. You can also move the wheel more dramatically to imitate the slides of a trombone, but that would be quite inappropriate for a trumpet and the other brass instruments.

**The Resulting Patch**

Figure 17 (below) shows all the elements I've described, and there's no reason why you shouldn't walk up to a Minimoog and patch it as shown. Your results won't be _exactly_ the same as mine, because in no two Minimoogs are the voice circuits identical, nor are their knobs calibrated identically. So, be prepared to tweak things a little.

Looking back at the Minimoog block diagram in Figure 1, it's interesting to eliminate all the parts that are unused, and see how the switch positions shown in Figure 17 have configured the instrument (see Figure 18 on the next page). As you can see, many elements of the synth are unused, including Osc2, the pitch modulation, the slew generator, the Release generators, and the external input. This has simplified matters considerably, so it shouldn't be too hard to relate the switch settings in Figure 17 to the block diagram in Figure 18\.

Perhaps even more intriguing is Figure 19, right underneath Figure 18, which shows just how little of Figure 2's idealised brass patch is recreated on a Minimoog. I've left the blank spaces from which I've removed all the unused modules, just to emphasise the limitations imposed by the Minimoog.

[![](http://media.soundonsound.com/sos/jun01/images/fig18brassblock.s.gif)][11]

Figure 18: The routings used for the Minimoog brass patch.

[![](http://media.soundonsound.com/sos/jun01/images/fig19limitedss25patch.s.gif)][12]

Figure 19: How little of Figure 2 survives on the Minimoog. The large amount of blank space should drive home how ill-equipped (in theory, at least) the Minimoog is to deal with the idealised brass patch. Nevertheless, acceptably 'brassy' results are forthcoming!

[![](http://media.soundonsound.com/sos/jun01/images/fig20minimoogfactorytrump.s.gif)][13]

Figure 20: Tom Rhea's Trumpet from the Minimoog patch book.

[![](http://media.soundonsound.com/sos/jun01/images/fig21minimoogfactorytuba.s.gif)][14]

Figure 21: Tom Rhea's Tuba patch. The Performance panel has been omitted to save space (the settings on it are the same as in Figure 20).

[![](http://media.soundonsound.com/sos/jun01/images/fig22minimoogfactorytromb.s.gif)][15]

Figure 22: Tom Rhea's Jazz Trombone. Once again, the settings on the omitted Performance panel are the same as in Figure 20\.

Given this, it's astonishing how good a well-patched Minimoog can sound. Sure, its limited voicing and even more limited performance capabilities will ensure that it never sounds like a real brass instrument, but with sympathetic EQ and a suitable reverb, it's remarkable how close you can get. This is especially true when playing lower-pitched brass sounds such as trombones and tubas, because the ear is less sensitive to the nuances of their sounds.

**Other Patches**

I thought that it might be interesting to compare my brass patch to those published in 1977 in _Minimoog Sound Charts_ by Tom Rhea. This book, which also contains patches by Keith Emerson and Rick Wakeman, was produced by Moog's '70s parent company Norlin Music, and was included with later Minimoogs; many people consider it to be the definitive guide to the synth. But if you inspect Figure 20, you'll see that Rhea's trumpet patch is very different from the one I've created.

Most obviously, Rhea has used all three oscillators as sound sources, tuned in unison so that (in his words) you can "add oscillators for progressively 'Fatter' tutti sounds". This means that there is no modulation (other than any manual vibrato you add using the pitch wheel).

If you study the Loudness Contour and performance panel, you'll see that Rhea's Attack setting is a little slower than mine, and that he has added a short Decay once the note is released. But these are not huge changes... much more significant are the changes in the Filter settings. There's no filter modulation, keyboard tracking is just 66 percent, the Attack is faster, the filter cutoff starts at a higher frequency, there's no emphasis, and the Amount Of Contour is lower. To some extent, two of these cancel out --- the more open filter and the lesser envelope --- but these settings do not really conform to the theory laid down in parts 24 and 25 of this series.

Consequently, the book's patch does not sound as realistic as mine. This may sound a little arrogant, but I have based my patch on firm scientific principles, so it would be surprising if it did not retain the essential character of the brass instrument. I find Rhea's sound to be somewhat muted, and feel that it lacks the movement introduced by the filter modulation that I have used.

In contrast, Rhea's Tuba patch (see Figure 21, above) adheres much more closely to the theoretical principles discussed here over the past couple of months. Rhea's Tuba retains the less aggressive filter contour used on his trumpet, as well as the short Decay at the end of the note, but employs a single sawtooth oscillator and filter modulation. The most interesting part, however, is the source of the modulation. Instead of using Osc3 (and therefore risking FM side-bands) he uses the noise generator to roughen up the filter. This proves to be extremely effective. He also recommends that players experiment with the Amount Of Contour and Cutoff Frequency knobs to create brassier or more muted effects.

Finally, Rhea's Jazz Trombone patch in Figure 21 (below left) contains many of the elements described earlier. The envelopes are similar, the single sawtooth oscillator is the same, and he uses Filter Modulation. Here he uses Osc3 as a true LFO (whereas I have used it as an audio frequency modulator), and he adds Oscillator Modulation (vibrato). Personally, I find it's very difficult to limit the vibrato to a reasonable level using the Mod wheel, but this is nonetheless an effective patch when played with care.

**Handle With Care**

There are a couple of points that need restating before I finish. Firstly, bear in mind that your appreciation of a trumpet's sound may be very different to mine. Indeed, you might be thinking Royal Philharmonic, while I'm thinking Satchmo. This means that all of the settings shown in this article are guidelines. Nevertheless, however you manipulate the sound, it must retain the common elements shown in the diagrams here. If you stray too far from these settings --- perhaps by changing the oscillator setting so that it produces a different waveform, or by altering the envelopes so that they exhibit instantaneous attacks, or by adding a high degree of filter emphasis --- none of the resulting patches will sound remotely brassy.

The second concerns performance. You may have access to the perfect brass patch, or to a perfectly recorded trumpet sample, or even to the physically modelled brass patches on a Yamaha VL7 or a Korg Z1\. However, none of them will sound authentic unless you play them in a manner that is sympathetic to the original instrument. Some synthesists --- Wendy Carlos is an excellent example --- manage to coax remarkably lifelike performances from their synths. You and I, on the other hand, may find ourselves unable to approach the same level of authenticity, even when playing the same patches on the same instruments. When this happens, our natural inclination is to blame the equipment, the outboard effects, or the person who gave you the patch settings. But before you do this, consider your playing technique. Synthesis is not just about sounds; it's also about performance. And no amount of signal-routing diagrams can help you with that. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][16]

[0]: http://www.soundonsound.com/sos/jun01/articles/synthsecrets.pt26.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/jun01/images/fig01minimoogblock.l.gif
[3]: http://media.soundonsound.com/sos/jun01/images/fig02thess25brasspatch.l.gif
[4]: http://media.soundonsound.com/sos/jun01/images/fig08loudnesscontour.l.gif
[5]: http://media.soundonsound.com/sos/jun01/images/fig10brassfiltercontour.l.gif
[6]: http://media.soundonsound.com/sos/jun01/images/fig11brassfilterprofile.l.gif
[7]: http://media.soundonsound.com/sos/jun01/images/fig14controlthemodlevel.l.gif
[8]: http://media.soundonsound.com/sos/jun01/images/fig15vcfgrowlfromss25.l.gif
[9]: http://media.soundonsound.com/sos/jun01/images/fig16harmonicrisetimes.l.gif
[10]: http://media.soundonsound.com/sos/jun01/images/fig17minimooggrtrumpet.l.gif
[11]: http://media.soundonsound.com/sos/jun01/images/fig18brassblock.l.gif
[12]: http://media.soundonsound.com/sos/jun01/images/fig19limitedss25patch.l.gif
[13]: http://media.soundonsound.com/sos/jun01/images/fig20minimoogfactorytrump.l.gif
[14]: http://media.soundonsound.com/sos/jun01/images/fig21minimoogfactorytuba.l.gif
[15]: http://media.soundonsound.com/sos/jun01/images/fig22minimoogfactorytromb.l.gif
[16]: http://www.soundonsound.com