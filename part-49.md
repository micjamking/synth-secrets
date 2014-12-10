# Synth Secrets: Practical Bowed-string Synthesis  
_Original article: [http://www.soundonsound.com/sos/May03/articles/synthsecrets49.asp][0]_

[![](http://media.soundonsound.com/sos/may03/images/fig01bowstringbridge.s.gif)][1]

Figure 1: Modelling the bow, string and bridge.

**Having looked at the mechanics of how a bowed string instrument generates its sound last month, it's time to put these principles into practice, using nothing more complex than a miniKorg 700 monophonic synth... This is the 49th article in a 63-part series. Read [all parts][2].**

_

---

**Gordon Reid  
**_

Last month, we discussed the nature of the orchestral instruments that are usually bowed to create their sounds. These are commonly accepted to be the violin, viola and cello, although -- despite its use as a plucked instrument in jazz and rock & roll -- the double bass is also a member of the family. We will now attempt to recreate the sounds of the smallest of these using a simple, analogue, subtractive synthesizer.

**The Basics**

As I explained in last month's instalment of this series (see [www.soundonsound.com/sos/ apr03/articles/synthsecrets48.asp][3]), the action of the bow upon the string and the action of the string upon the bridge produce a sawtooth wave in the bridge itself. This energy is then modified by the bridge resonances before being transmitted to the body of the instrument. We can represent this as a synth
[![](http://media.soundonsound.com/sos/may03/images/fig02abodyresponse.s.gif)][4]

Figure 2(a): The frequency response of a violin body.

esizer patch using just a single sawtooth oscillator, plus a complex filter bank to model the bridge resonances (see Figure 1, below).

What happens when we energise the body of the instrument is a little more complex, although we can describe it in similar fashion; the body has a complex frequency response that imposes another set of resonances and anti-resonances upon the sound. Figure 2(a) (below left) shows the response for a typical violin body, and Figure 2(b) shows the rather different spectrum obtained when the body is energised by the modified sawtooth wave produced by the filter bank in Figure 1\. As you can see, there are three prominent resonant regions in Figure 2(b), with a sharp roll-off in the bass, and a gentler roll-off at high frequencies. And, complex thou
[![](http://media.soundonsound.com/sos/may03/images/fig02boverallvspectrum.s.gif)][5]

Figure 2(b): The frequency response obtained when energising the violin body using a string, bow, and bridge.

gh this appears to be, we can approximate it using just three synthesizer modules: a low-pass filter, a high-pass filter, and a resonant filter bank (see Figure 3, above right).

Fortunately, when modelling the violin, we don't need to add the filter bank in Figure 1 to the filter bank in Figure 3\. We can use a single bank and set the filter frequencies, gains and Qs to the appropriate values for the combined response of the bridge and body. This then gives us a model for the basic timbre of a violin's sound, as shown in Figure 4 below.

Now, I'm at a loss to recall an integrated subtractive synthesizer that offers a low-pass filter, a high-pass filter and a resonant, parametric filter bank. However, this need not be a problem, because if we ignore a number of secondary effects, the order in which the filter appears need not matter to us, and we can place the filter bank _after_ the low-pass and high-pass filters. In other words, we can create the basic sound using any synth with a low-pass filter and an high-pass filter, and then pass the output through an _external_ filter bank. Of course, not everybody has access to an external filter bank, but there are a number of affordable units available. I have one of them... an Analogue Systems RS360 Vocal/Phase Filter Bank (as shown in Figure 5 below), so I will use this to replace the signal model in Figure 4 with that in Figure 6\. By the way, note that Formant synthesis (for this is what we are discussing -- see the box above) requires at least three formants per sound. This means that the RS360 or an equivalent is the minimum suitable configuration for our purposes.

If you study Figure 5, you will see that each of the RS350's three filters offers a Sig In Level, a Frequency control, and Resonance. Each filter produces the four common filter characteristics (24dB-per-octave low-pass, 24dB-per-octave
**FURTHER READING**

FILTER
SIG IN LEVEL
FREQUENCY
RESONANCE 

VCF1
4
300Hz
3.5

VCF2
5
700Hz
3.5

VCF3
MAX
3kHz
2

high-pass, 12dB-per-octave band-pass and 12dB-per-octave notch filtering), and the cutoff frequencies of the high-pass and low-pass filters are the centre frequencies of the band-pass and notch filters. The summed outputs on the right-hand edge of the module offer the low-pass outputs of all three filters, the high-pass outputs of all three, and so on.

Now, we're not interested in the low-pass and high-pass filters offered, nor are the notch filters of any use this month. But if we use the summed outputs of the band-pass filters, we can achieve some useful results.

To set up the RS360 appropriately, we will set the first two filters to accentuate the body resonances at 300Hz and 700Hz. We do this by setting the Frequency controls of VCF1 and VCF2 to the appropriate positions, setting the signal levels to imitate the
**FURTHER READING**

NOTE
APPROXIMATE

FREQUENCY (HZ)

A0
55

E1
82.5

A1
110

E2
165

A2
220

E3
330

A440 (MIDI A3)
440

E4
660

A4
880

E5
1320

A5
1760

E6
2640

A6
3520

height of the peaks in Figure 2, and then adjusting their resonances to emphasise any signal partials that lie at, or close to, these frequencies. To create the broader peak at 2kHz to 4kHz, we set VCF3 to about 3kHz and use a lower resonance. This allows a wider spread of frequencies to pass.

I have summarised t
[![](http://media.soundonsound.com/sos/may03/images/fig03stringbridgebody.s.gif)][6]

Figure 3: Modelling the combined frequency response of the violin's elements.

he settings necessary to recreate Figure 2 in the table below, and I can represent their combined frequency response as Figure 7\.

At this point, you may be wondering how on earth you go about tuning a filter bank to precise frequencies. Synthesizer filters with calibrated initial cutoff frequencies are vanishingly rare, and Analogue Systems' annotation from 'Min' to 'Max' is of no help whatsoever. So here's the trick...

Placing a suitable attenuator somewhere in the signal chain between the filter bank and your speakers, you should set the cutoff of VCF1 to a middling value, and then increase the resonance to maximum. A tortured shriek will result... and it will be you doing the shrieking if you ignored my warning about the attenuator. The filter is now emitting a sine wave at the cutoff frequency so, given a suitable reference, we can tune it to the desired pitch.

Few of us have a pitch-to-frequen
[![](http://media.soundonsound.com/sos/may03/images/fig04simpleviolinmodel.s.gif)][7]

Figure 4: A simple model of the initial violin timbre.

cy chart in front of us (and even fewer have memorised one) so we need to be able to judge the cutoff frequency using a simple, mnemonic rule of thumb. The one I devised and use is this: We know that the fundamental frequency of the 'A' above middle 'C' is 440Hz or thereabouts. We also know that the 'A' above this oscillates at double the frequency, **Band-pass Filter Banks**

Filter banks of the sort described here are often used to create Formants. These are the static resonances inherent in sound generators such as the human voice and hollow-bodied musical instruments, and they are important elements within sound synthesis. This is because, just as the precise positions and shapes of the formants in a human voice allow you to identify the vowel sounds spoken, they make the timbres of acoustic instruments consistent and recognisable from one instrument to the next. It therefore follows that recreating the formants of a given instrument represents a big step toward the accurate synthesis of its sounds.

and the 'A' below oscillates at half the frequency. Furthermore, we know that a perfect fifth -- ie. close to the 'E' above A440 -- oscillates at 3/2 times A440, as do all the other 'E's relative to the 'A's below them. We can, therefore, create a simple table that defines a number of frequencies across the keyboard, as shown here.

Tuning our filters now becomes simple. If you want to set VCF1 to about 300Hz, you find the closest Figure in the table (which is E3 at 330Hz) and -- by simple comparison -- tune the self-oscillation to a note a semitone or two below this; ie. in the region of D\#3 or D3\. Likewise, the closest to 700Hz -- the frequency we desire for VCF2 -- is E4 at 660Hz, so you tune the self-oscillation of VCF2 to F4 or thereabouts. Finally, 3
[![](http://media.soundonsound.com/sos/may03/images/synthfig05rs360.s.gif)][8]

Figure 5: The Analogue Systems RS360 filter bank.

000Hz lies about halfway between E6 and A6, so you tune VCF3 in the region of F\#6 or G6\. Having found the correct setting for each filter in turn, you then turn down the resonance to the values shown in the table on the last page (a self-oscillating filter is not what we want in our sound this month, after all). It's a crude method, given that pitch operates on a logarithmic scale, not a linear one -- but it works. 

**Inserting The Waveform**

Now we have to select a synth to provide the filtered sawtooth wave that we're going to pass through the RS360\. Oh yes... and we're going to need an amplitude envelope, an LFO and a keyboard or other controller of some sort.

These are simple requirements, and we could use almost any synth to satisfy them. I'm going to turn to the first synth I ever owned; one of the most basic eve
[![](http://media.soundonsound.com/sos/may03/images/fig06externalfilterbank.s.gif)][9]

Figure 6: Combining an integrated synth and an external filter bank.

r built, yet still capable of producing some rather super sounds. It's the Korg 700\.

Figure 8 (below) shows the entire control panel of the little Korg. If you've never played one, you might think that it is incredibly limiting; it offers no ADSR envelopes, no filter resonance controls, no obvious routing... in fact, little of anything. But appearances can be deceptive, and the 700 was responsible for many classic patches in the mid-1970s. 

Setting it up to produce the desired waveform and filter roll-offs is trivial. First, we turn to the Scale and Mode selectors, setting the first to 4' (the violin is, after all, a fairly high-pitched instrument) and the latter to sawtooth. Next, we find the 'Traveler', which is a combined high-pass/low-pass filter. The upper slider controls a 12dB-per-octave low-pass filter, so we lower this somewhat to roll
[![](http://media.soundonsound.com/sos/may03/images/fig07fbfrequencyresponse.s.gif)][10]

Figure 7: Modelling the violin frequency response of Figure 2\.

off the highest frequencies. Likewise, the lower slider controls a 12dB-per-octave high-pass filter, so we raise this to attenuate the low frequencies (see Figure 9 below).

If we now play the Korg through the RS360 filter bank, we obtain a sound that is nothing like a violin; in fact, it is closer to that of a banjo. This is because the envelope of the sound is percussive. We need to find the ADSR envelope generator and create something more in keeping with a 'bowed' sound.

Umm... except that the Korg 700 _has_ no ADSR envelope generator. There are only three contour controls: [![](http://media.soundonsound.com/sos/may03/images/fig09korgviolinvcovcf.s.gif)][11]

Figure 9: Setting the VCO and dual VCFs.

the two sliders marked 'Attack/Slow' and 'Percussion/Singing', and the Sustain switch found in the group of eight switches near the centre of the panel. You'll note that each of these is coloured orange. This is not a coincidence. Korg colour-coded all the controls on their early synths: orange for amplitude controls, red for timbre controls, blue for pitch controls, yellow for the repeat LFO, and green for portamento.

We need to modify the contour of the sound so far obtained, and we do so by increasing the Attack to somewhere in the region of '5' or '6', and by increasing the Percussion to Singing, which is equivalent to a Sustain setting of 10 on a conventional synth. But beware... do not switch on Sustain by flipping the switch downward, because it applies a fixed amount of what we would normally term 'release' to the envelope, and that would be inappropriate for what we want (ye
[![](http://media.soundonsound.com/sos/may03/images/fig08korg700panel.s.gif)][12]

Figure 8: The starting patch for a Korg 700 minikorg.

s, I know that it's confusing, but that's part of the charm of the Korg 700; it does things differently, and forces you to approach sound creation in a novel manner). Anyway, we have now set the amplitude controls as shown in Figure 10 (on the next page), and obtained the amplitude contour shown in Figure 11\. Things are starting to sound decidedly stringier.

So... how does it sound? Well, it has a 'bowing' sort of attack, and a similar timbre to a violin, but it still sounds little like a violin. It sounds like a synthesizer. On the other hand, if I were to pick up a violin and try to play it, the result would also sound nothing like a violin. The explanation for this is
[![](http://media.soundonsound.com/sos/may03/images/fig10korgviolinvca.s.gif)][13]

Figure 10: Setting the VCA.

simple; I'm incapable of playing a bowed string instrument, and my attempts would surely incur the wrath of the Cats Protection League. Sure, I can scrape a basic tone from the instrument, but there is no finesse, no articulation, no feeling. And this is what is wrong with the patch I have just created. While a single note may sound vaguely like a bow being dragg
[![](http://media.soundonsound.com/sos/may03/images/fig11700contour.s.gif)][14]

Figure 11: The unusual Korg 700 VCA contour.

ed across a violin string, a succession of notes have none of the attributes that make them sound like a musical instrument. So we're going to attempt to correct this by adding the most important element in the violinist's playing technique... vibrato.

A human violinist creates vibrato by wiggling the finger that is pressing the string against the neck of the instrument, The modulation speed is usually in the range of about 5Hz to 8Hz, and the amplitude can be surprisingly high; up to about a quarter of a tone. However, the vibrato is not consistent, and we should be aware that players tend to introduce it after the initial bowing action, and modify it to suit the requirements of the music.

Surprisingly, due to the physics of the violin, this vibrato also creates amplitude modulation (tremolo) and a good bowed string patch will take account of this. But the Korg 700 is not capable of tremolo, so we will have to ignore this.

Figure 12 (below) shows the vibrato controls for our patch. We choose modest settings for the vibrato speed and depth, adjusting these by ear to generate a pleasing amount of motion in the sound. Note that I have chosen to use the 'Delay Vib' setting in preference to straight 'Vibrato' because this introduces the effect a fraction of a second after you play the note. It's a crude imitation of a human performer, but it's far superior to having the vibrato present from the moment that you press a key.

The next problem concerns the pitching of the notes. This patch, like a piano or organ, plays notes discretely; that is, overlooking the vibrato for a moment, an '
[![](http://media.soundonsound.com/sos/may03/images/fig12korgviolinvibrato.s.gif)][15]

Figure 12: Adding delayed vibrato.

A' is an 'A' from the moment that you press the key, a 'B' is precisely a 'B' and so on. This is not what happens when you play an unfretted string instrument, and even the best violinists will play notes a fraction sharp or flat, and then 'hunt' for the correct pitch. Add to that the glide used in violin performances, and it is clear that -- to imitate the sound more accurately -- we must introduce some sort of 'performance' attribute to the pitch.

On a more sophisticated synth, we could use the pitch-bend wheel to add glide, and even (with practice) to create a more musical vibrato. But the Korg 700 has no such controls; no pitch wheel, no joystick, no touchpad -- no nuffink! What it does have, however, is portamento, and we can use the tiniest amount of this to create an almost imperceptible glide between notes (see Figure 13). Any more than the tiniest amount will destroy the illusion instantly, but if you can get the Portamento slider to sit just off 'zero', it can improve the patch considerably.

And that's all there is to it. So let's summarise: firstly, we used the synth to generate a sawtooth wave, and filtered it
[![](http://media.soundonsound.com/sos/may03/images/fig13korgviolinglide.s.gif)][16]

Figure 13: Adding a little glide to the patch.

using the internal low-pass and high-pass filters to satisfy the requirements of Figure 5\. Secondly, we chose contour settings that create a slight 'bowing' attack to the beginning of the sound, and which sustain it for as long as a key is depressed. Thirdly, in an attempt to reduce the rather synthetic nature of the sound, we added delayed vibrato, plus a smidgen of portamento to make the transitions between notes less like an organ and more like an unfretted instrument. Finally, and again in keeping with Figure 5, we passed the result through a three-band parametric 'formant' filter that provides a rough emulation of the most prominent body resonances of the real instrument.

So, does it now sound like a real violin? Don't be silly -- it still sounds like a 1970s synth patch of a violin. Nevertheless, played sympathetically, and with careful tuning
[![](http://media.soundonsound.com/sos/may03/images/fig14korgfactorypatch.s.gif)][17]

Figure 14: The 'factory' violin patch from the Korg 700 manual, printed in 1974\.

of the RS360, it has a pleasing 'violin-y' quality, particularly at higher pitches.

But what if you don't have a filter bank? Does the patch still work? Indeed it does, although it loses a little of the timbre that I've been trying to create. To demonstrate this, Figure 14 shows the original Korg 700 'factory' violin patch, and you can see both the similarities and differences to mine. For example, I prefer a slower Attack, and use the high-pass filter to remove more of the lower frequencies. What's more, I use less vibrato and have added that tiny amount of portamento, but the basis of the patch is essentially the same. Still, neither sound is the best imitation of a violin that I have heard produced by an analogue synth, so next month we'll investigate bowed string sounds further, and see what improvements we can obtain on more sophisticated equipment. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][18]

[0]: http://www.soundonsound.com/sos/May03/articles/synthsecrets49.asp
[1]: http://media.soundonsound.com/sos/may03/images/fig01bowstringbridge.l.gif
[2]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[3]: www.soundonsound.com/sos/ apr03/articles/synthsecrets48.asp
[4]: http://media.soundonsound.com/sos/may03/images/fig02abodyresponse.l.gif
[5]: http://media.soundonsound.com/sos/may03/images/fig02boverallvspectrum.l.gif
[6]: http://media.soundonsound.com/sos/may03/images/fig03stringbridgebody.l.gif
[7]: http://media.soundonsound.com/sos/may03/images/fig04simpleviolinmodel.l.gif
[8]: http://media.soundonsound.com/sos/may03/images/synthfig05rs360.l.gif
[9]: http://media.soundonsound.com/sos/may03/images/fig06externalfilterbank.l.gif
[10]: http://media.soundonsound.com/sos/may03/images/fig07fbfrequencyresponse.l.gif
[11]: http://media.soundonsound.com/sos/may03/images/fig09korgviolinvcovcf.l.gif
[12]: http://media.soundonsound.com/sos/may03/images/fig08korg700panel.l.gif
[13]: http://media.soundonsound.com/sos/may03/images/fig10korgviolinvca.l.gif
[14]: http://media.soundonsound.com/sos/may03/images/fig11700contour.l.gif
[15]: http://media.soundonsound.com/sos/may03/images/fig12korgviolinvibrato.l.gif
[16]: http://media.soundonsound.com/sos/may03/images/fig13korgviolinglide.l.gif
[17]: http://media.soundonsound.com/sos/may03/images/fig14korgfactorypatch.l.gif
[18]: http://www.soundonsound.com