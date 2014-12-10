# Synth Secrets, Part 10: Modulation  
_Original article: [http://www.soundonsound.com/sos/feb00/articles/synthsecrets.htm][0]_

In this month's instalment of his series on the basics of subtractive synthesis, **Gordon Reid** considers the magic ingredient that makes all the other elements sound interesting... This is the 10th article in a 63-part series. Read [all parts][1]. 

[![](http://media.soundonsound.com/sos/feb00/images/synthsec1_2s.gif)][2]In the first nine episodes of Synth Secrets, we've covered a lot of ground. We have discussed waveforms, filters, envelopes, triggering and gating -- surely we are now ready to create some killer synth sounds? No? What's missing? With the knowledge we now have, we can select our waveform, modify it using all manner of powerful filters, and apply envelopes to give the result life and dynamics. But this still isn't enough. Despite the contouring applied to the VCFs and VCAs, there is no movement within the sound: it still sounds like a 'beep' of some sort. 

The missing element is modulation, the trick that makes sounds live and breathe in an organic sort of way. If you think that this simply means using an LFO to add a bit of vibrato, think again. Modulation is undoubtedly the most involved (and involving) subject in all of synthesis. Nevertheless, if we are going to graduate on to the more complex aspects of the subject, we're going to have to exercise some discipline. This means that, at first, we must confine ourselves to a discussion of the simplest forms of cyclic modulation.

**1: Three Simple Modulations**

Figure 1 combines the most important sonic elements from Parts 1 to 9 of this series, connected into a simple but usable synthesizer configuration. As you can see, the signal source is a tone generator of some sort (an oscillator). The output from this first passes through a filter, and then an amplifier before reac[![](http://media.soundonsound.com/sos/feb00/images/synthsec3_4s.gif)][3]hing the outside world. The contour generators 'shape' the sound by causing the filter and amplifier to affect the brightness and loudness of the sound at the second and third stages, respectively. (For clarity, I have shown audio signals with bold arrows, and control signals with lighter ones. For the same reason, I have also omitted the pitch CV, Triggers and Gates.)

Now consider someone playing a string instrument such as a violin, or a cello. As you know, the position at which the player presses the string on to the neck of the instrument determines the pitch of the note that's produced. The shorter the effective length of the string, the higher the pitch of the note. Now picture that person playing, and you will see that he (no sexism intended) often rocks his fingers backwards and forwards on the neck. This shortens and lengthens the string by a small amount each time he moves his hand (he is also changing the tension by a tiny amount, but we need not worry about that). This change, in the effective length raises and lowers the pitch slightly, resulting in vibrato. Figure 2 is a simplified representation of the way a short burst of vibrato modifies the pitch of an otherwise steady note. Likewise, Figure 3 shows -- in grossly exaggerated form -- the change in a waveform during a period of vibrato.

Reproducing this effect on an analogue synth, albeit in a rather unsubtle manner, is easy, and I am sure that most of you will be way ahead of me here. You simply apply a control voltage to the oscillator in such a way that it raises and lowers the pitch slightly.

If you look at the block diagram in Figure 4, you will find that the CV (the modulating waveform) is supplied by a low-frequency oscillator (an LFO). You will also notice that a VCA controls the amplitude of the modulating waveform, and the VCA is itself controlled by a modulation wheel. The VCA and wheel are very imp[![](http://media.soundonsound.com/sos/feb00/images/synthsec5-8s.gif)][4]ortant parts of this configuration because, without them, there would be no simple way to control the amount of vibrato, which would be particularly unmusical.

**Tremolo**

Let's now move on from vibrato, and consider tremolo. These effects are frequently mistaken for one another, but the distinction is simple: whereas vibrato is a periodic change in the pitch of a sound, tremolo is a periodic change in the loudness of the sound. Figure 6 has the same axes as Figure 3, but the graph has quite a different shape, showing how the frequency of the note remains constant, but the level changes in time.

Now that we understand the difference between these two effects, it is easy to see how the synthesizer differentiates between them. Whereas vibrato requires that something modulates the pitch of the oscillator, tremolo requires that something modulates the gain of the audio amplifier at the end of the signal chain. The block diagram for this looks like Figure 7\.

The third in our introductory set of effects occurs when we modulate the voltage-controlled filter in our simple synthesizer. The results are, perhaps, less easy to envisage than either vibrato or tremolo. Indeed, you can obtain three distinct effects simply by changing the frequency of the LFO that generates the modulation in the sound. At the slowest settings (say, about 0.1Hz) you will obtain a slow filter sweep which is very useful for ambient sounds. If you increase the speed to around 1 or 2Hz this becomes more like a wah-wah effect. If you continue to increase the speed to the upper limit of subsonic oscillations (around 10 to 20Hz) you will hear a growl which can be superb for simulating brass instruments.

The effects of this type of modulation are less easy to draw (see Figure 9), because the visible changes in the waveform caused by modulated filtering are so slight. You can _hear_ the changes very easily (this is not a subtle effect), but you would need an oscilloscope to see that the waveform is slightly rounded off when[![](http://media.soundonsound.com/sos/feb00/images/synthsec9_10s.gif)][5] the cutoff frequency is low, and that the amplitude drops by a small amount as the upper harmonics are attenuated.

Of course, there is no reason why vibrato, tremolo and growl should be mutually exclusive, and a good analogue synthesizer will allow you to route the LFO to any of these destinations. A better synth will offer individual LFOs that you can assign to each destination, with the depth of each effect governed by a selection of controllers. These might include modulation wheels, aftertouch (pressure sensitivity), or foot pedals. The block diagram for this (Figure 11) may look daunting, but you will see that it breaks down into the easily understood parts shown above.

However, it's unlikely that you will want to control the level of each of the three modulation VCAs using all three controllers simultaneously. Therefore, you should consider the lines joining the controllers to the VCAs as options. This introduces us to the switches that select between sources and destinations on most synthesizers. The decisions you make regarding these will help determine the sound your synth produces, and the ways in which you can control the modulation to make your playing more expressive.

**2: Another Simple Modulation**

There is one more simple form of modulation that is implemented in most good analogue synthesizers. To understand this, let me take you back to a waveform I introduced when we discussed low-pass filters in Synth Secrets Part 4 (_SOS_ August '99). This is the square wave, so-called not because its shape is truly square, but because it is a pulse waveform that spends the same amount of time at its peak as it does at its nadir (Figure 12). 

Clearly, the square wave is a special case of the class of waveforms called pulse waves, all of which share the same 'rectangular' shape, but are different in as much as the ratio of the time the signal spends at the[![](http://media.soundonsound.com/sos/feb00/images/synthsec11_12s.gif)][6] 'top' and 'bottom' of the wave differs. We call this ratio the 'duty cycle'. Since the square wave spends exactly half its time at the 'top' of the wave, it has a ratio of 1:2, and we say that it has a duty cycle of 50 percent. A similar wave that spends just one-third of its time 'at the top' has a duty cycle of 1:3 (33.3 percent), while one that spends a quarter of the time 'at the top' has a duty cycle of 1:4 (25 percent) -- see Figures 13 and 14\.

_Note: You will sometimes see references to duty cycles greater than 50 percent. In essence, for any number X lying between zero and 50, a duty cycle of (50+X) percent is identical to that of (50-X) percent, but the phase is inverted. For the purposes of this discussion, you need not worry about this._

Pulse waves with different duty cycles have quite different audible characteristics. Narrow cycles (usually in the range 5 to 10 percent) are thin and nasal, and are often used to create sounds such as oboes. As the duty cycle becomes closer to 50 percent the sound thickens considerably, but at exactly 50 percent it has a distinctively hollow character that is ideal for simulating clarinets and other 'woody' sounds. (No sniggering from our American readers, please.)

These timbral changes are a consequence of the harmonics present in each waveform, and the amplitudes that they each possess. Fortunately, we can easily express the relationship between the duty cycle and the harmonic distribution, as follows:

_A pulse wave has the same harmonic distribution as a sawtooth wave except that, for a duty cycle of 1:n (where n is an integer) every nth harmonic is missing from the spectrum. _

(If you need to remind yourself of the harmonic distribution of a sawtooth wave, please refer back to Synth Secrets 1, _SOS_ May '99.) 

So, armed with this knowledge, let's consider the square wave again. This has a duty cycle of 1:2, so we can infer that every second harmonic is missing from the spectrum. Our law describing the pulse-wave[![](http://media.soundonsound.com/sos/feb00/images/synthsec13_14s.gif)][7] relationship therefore yields a result that people often quote, but rarely understand: since every even harmonic is missing, a square wave comprises the 1st, 3rd, 5th, 7th, and other odd-numbered harmonics.

Now consider the pulse waves in Figures 13 and 14\. These have duty cycles of 1:3 and 1:4 respectively. Consequently, the 33.3 percent pulse wave includes the 1st, 2nd, 4th, 5th, 7th, 8th harmonics (and so on), with every third harmonic missing, and the 25 percent pulse wave includes the 1st, 2nd, 3rd, 5th, 6th, 7th, 9th, 10th harmonics (and so on), with every fourth harmonic missing.

You may ask what happens when the duty cycle is not an exact integer ratio. For example, what happens to the harmonics in a 28.5 percent pulse wave? The answer is intuitive. Because 28.5 percent lies somewhere between the 1:3 and 1:4 duty cycles, every third harmonic is somewhat attenuated, as is every fourth, but no harmonics are completely eliminated from the signal.

OK, are you completely happy with these concepts? Good, because now we're going to combine our knowledge of pulse widths and modulation to create... Pulse Width Modulation. This uses a second CV input to the oscillator which, instead of modulating the frequency, allows you to modulate the duty cycle of the pulse wave oscillation. If an LFO provides the modulating CV, the resulting waveform looks like Figure 15\. The synth configuration that creates this is shown in Figure 16\.

The configuration in Figure 16 is very common, and creates the lush 'chorused' sounds that make many analogue synthesizers so desirable. Although Pulse Width Modulation is usually applied to pulse wave[![](http://media.soundonsound.com/sos/feb00/images/synthsec15_16s.gif)][8]s, there are a handful of synths that allow you to apply it to sawtooth waves. Of course, you can't describe this in terms of duty cycles, and calling the modulation Pulse Width Modulation is somewhat misleading. Nevertheless, those synths that offer it (such as the Roland Alpha Junos) provide yet another range of subtly different timbres.

Pulse Width Modulation is ideal for creating string ensemble sounds, as well as rich lead synth patches. But be careful to avoid confusing it with the many chorus effects units that you can buy, or with the chorus effects built into some synthesizers. These devices split the final signal produced by the instrument into two parts, and then use delay and modulation processes to create their effects. Pulse Width Modulation is quite different, modulating the amplitudes of the individual harmonics at their source, and producing a unique range of sounds.

**3: From Subsonic To Audio Frequencies**

All the forms of modulation that we have discussed this month have one thing in common: they use low-frequency oscillators as the source of the modulating control voltages. This is perfectly valid, and the simplified synth configurations shown above provide most of the 'expression' in synth performances. But you may ask yourself what happens when we modulate the oscillator, filter and amplifier (or even the pulse width) using audio-frequency (AF) signals? At first, you might think that we would hear very rapid vibrato, tremolo, growl, or Pulse Width Modulation, but you would be wrong. Modulating audio frequencies with audio frequencies creates a completely different set of effects, some of which lead directly to a powerful form of digital synthesis. But that will have to wait until next month, when we'll really start to stretch some synth boundaries... ![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/feb00/articles/synthsecrets.htm
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/feb00/images/synthsec1_2.gif
[3]: http://media.soundonsound.com/sos/feb00/images/synthsec3_4.gif
[4]: http://media.soundonsound.com/sos/feb00/images/synthsec5-8.gif
[5]: http://media.soundonsound.com/sos/feb00/images/synthsec9_10.gif
[6]: http://media.soundonsound.com/sos/feb00/images/synthsec11_12.gif
[7]: http://media.soundonsound.com/sos/feb00/images/synthsec13_14.gif
[8]: http://media.soundonsound.com/sos/feb00/images/synthsec15_16.gif