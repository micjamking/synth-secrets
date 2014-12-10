# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Aug01/articles/synthsecrets28.asp][0]_

Having dealt exhaustively with the mechanics of brass instruments and how to go about synthesizing them, **Gordon Reid** turns to instruments that use plucked strings to generate their sound, taking the complexities of the acoustic guitar as an example...

![](http://media.soundonsound.com/sos/aug01/images/synthguitarheader.gif)If you've been following Synth Secrets over the past four months, you'll have studied the physics of brass instruments, and seen how analogue synthesizers can recreate the essence of brass sounds. You're no doubt wondering whether other instruments can be analysed in the same way. The answer is yes, although if you thought brass instruments were complex sound-producing entities, you may be in for a shock this month, as I turn my attention to the principles of plucked strings and resonant bodies, and consider how these principles might help us to synthesize the sound of the acoustic guitar.

**Part 1: The String Itself**

I'll start, as I did in part one of Synth Secrets, by considering the vibration of a stretched string. By now, you're all familiar with the fact that such a string is capable of vibrating at all the frequencies that comprise the harmonic series, so you may be tempted to assume that this is always the case. It isn't.

Consider Figure 1 (see right). Imagine that the dashed black line in the diagram is a guitar string stretched between the nut and the bridge. You now use your fingertip or a plectrum to stretch the string a short way from its rest position, pulling it at its exact centre so that it becomes the red line in the diagram. In scientific [![](http://media.soundonsound.com/sos/aug01/images/synth1_4s.gif)][1]terms, you have displaced the string at every point along its length, although at this instant it has zero velocity. Then you release it.

Each point on the string now starts moving towards the dashed line. Once the string reaches this point, its tension stops accelerating it, and begins to decelerate it as it stretches in the other direction. At some point soon after, the string comes to rest in the position shown in Figure 2 (above right), and at that moment the forces begin to pull it back towards its starting position.

It's tempting to think that a string vibrating in this fashion maintains its triangular shape throughout the cycle, but this is not so. Figures 3(a) and 3(b) (see right), show how two waves -- one travelling left to right, the other right to left  
-- combine to produce the wave motion of the string. As you can see, the string loses its triangular shape, and becomes a rapidly flattening trapezoid. It passes through the rest position as a straight line, becomes a trapezoid of opposite polarity, and then re-assumes its triangular shape at the opposite extreme before the forces pull it back again.

But what is the harmonic content of the waveform produced by this motion? It's not trivial to perform a harmonic analysis to determine this, but don't worry; I'm not going to do the maths here. However, it's easy to visualise the result, because the starting point is a shape you know well -- it's a triangle. This makes things simpler, as you will see.

Imagine that you have at your fingertips an additive synthesizer capable of producing numerous sine waves at the pitches and amplitudes of your choice. Let's suppose that you program it so that your oscillator produces a sine wave of frequency F, amplitude A, and starting phase 0º. Now add a second oscillator, with frequency 3F, amplitude A/9, and a starting phase of 180º. Now add a third, with frequency 5F, amplitude A/25, and phase 360º (which is the same as 0º)... and so on.

You will notice that each oscillator is producing the next _odd_ harmonic in the series (or nA, if you like, where 'n' is any odd-number integer from 1 upwards), with an amplitude of (1/n)2 and an initial phase shifted by 180º compared with the previous. Using a simple program such as Microsoft _Excel_, it's straightforward to show that the result of adding these oscillators' outputs is... a triangle wave (see Figure 4, above right).

Now, if the odd harmonics shown in Figure 4 conspire to create the triangle waveform shown, you might conclude that the component frequencies produced by a string plucked at its mid-point are also those of a triangle wave. Again, the proof of this is not trivial, but it makes an intuitive kind of sense. After all, if there[![](http://media.soundonsound.com/sos/aug01/images/synth4s.gif)][2] were any _even_ harmonics in the signal, there would have to be zero displacement at the centre of the string. You can see this in part 1 of Synth Secrets in _SOS_ May 1999 ([_www.soundonsound.com/sos/may99/articles/synthsec.htm_][3]_)_, where it is clear from the diagrams that all even harmonics on a vibrating string fixed at both ends have a 'node', or zero-displacement point, at the middle. The presence of such a node in the example in Figure 1 this month, however, is clearly impossible; the centre cannot be at zero, as it's the point at which the string is being plucked (see Figure 5, right).

So there it is... a guitar string -- which is capable of vibrating at all the frequencies of its harmonic series -- does not necessarily do so all of the time. When plucked at its centre, the string initially produces a triangle wave, and this has only _odd_ harmonics.

Now let's return to this idea of nodes. If every second harmonic is missing when you pluck a string at its centre, it follows that:

![](http://media.soundonsound.com/images/regulars/bulbow.gif) If you pluck the string a third of the way between its anchor points, every third harmonic will be missing;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) If you pluck the string a quarter of the way between its anchor points, every fourth harmonic will be missing...

...and so on. Again, this is because you can't have a node at the point at which the string is plucked.

If you have access to a guitar, you can demonstrate this by moving your picking position up and down a string while holding the same fret. The result is the distinctive flanging sound produced by moving the 'holes' in the harmonic spectrum up and down the frequency spectrum. The generating mechanism may be different, but you're creating the same effect as a swept comb filter.

So here's the first significant problem you encounter when trying to create a convincing guitar patch: although you might think of the guitar string as a simple oscillator, the plucking position determines its initial waveform and, therefore, its initial harmonic spectrum.

However, there are plenty of other complicating factors. Everything I've discussed so far has assumed a perfect triangular starting point for the string's vibrations. This never happens, because neither your fingertips nor a plectrum are infinitely small and hard. Consequently, the string will start vibrating with a rounded profile at the plucking point. This acts as a low-pass filter, suppressing the higher harmonics. Although you might th[![](http://media.soundonsound.com/sos/aug01/images/synth5s.gif)][4]ink that this has an unimportant, or at best marginal effect, you only have to strum an acoustic guitar with something wide and soft (like your thumb) and then compare the sound to that achieved by strumming with something thin and hard, like the tip of a screwdriver, to see that this is not the case.

**Part 2: The Soundboard**

Let's now move on from strings and consider another important component of the acoustic guitar... the soundboard formed by the upper surface of the instrument. Indeed, because this is a geometrically complex surface with a large hole in the middle, let's start by simplifying matters, and consider the properties of a flat, rectangular plate clamped on all four sides.

Like the circular membranes I described in part two of this series (see _SOS_ June 1999 or [_www.soundonsound.com/sos/jun99/articles/synthsecrets.htm_][5]), rectangular plates have two dimensions. This means that they can vibrate in an East/West direction and in a North/South direction (actually, rectangular plates can also vibrate in a circular fashion, but I'm not going to consider this here for reasons of space). This means that I can't talk about single modes of vibration where plates are concerned (n = 1, 2, 3, 4... and so on) but must consider instead (m,n) modes of vibration where, for the sake of argument, 'm' is the number of nodes in the plate in the East/West direction, and 'n' is the number of nodes in the plate in the North/South direction.

This leads to the representations for the first handful of plate modes which you can see on the right of this page in Figures 6(a) to 6(f), where a shaded area is at any given moment 'up' and a white area is 'down' -- or the other way around.

At this point, it's tempting to think that the plate is acting like a two-dimensional string and, to some extent, that's correct. The vibrations in the two dimensions are 'orthogonal' which means that the East/West waves are independent of the North/South waves, and the two do not interact. It is then tempting to think that the plate is producing two independent harmonic series of the sort produced by the string. After all, Figures 6(a) to 6(f) show that the vibrations in each direction are analogous to those in the string. Unfortunately, this is where the intuitive approach falls apart, and you need an understanding of wave mechanics to determine the vibration frequencies in each of the m,n modes.

If you do the maths, you find that the frequency produced by each mode depends upon size of the plate and the relative dimensions of its edges. For example, if the frequency of the 1,1 (fundamental) mode of vibration of the plate in Figure 6 were 100Hz, the 2,1 and 1,2 modes would have frequencies of approximately 277Hz and 171Hz. These do not fit any harmonic series, which is why a rectangular plate goes 'boing', rather than producing a note that sounds musical to our ears.

Now, let's return to the acoustic guitar. This has a top surface that is more complex than a rectangular plate, so its modes of vibration are more complex. Furthermore, the surface is supported by an intricate pattern of braces, and the shape and rigidity of these will complicate matters. This means that it's almost impossible to calculate the resonant modes of a guitar's top plate, although, using a sophisticated optical technique called interferometry, you can see them form dense patterns on the surface of the plate.

I have shown the very simplest of these modes in Figures 7(a) to 7(d), the series of diagrams at the bottom of this page, and it's not hard to see how they correspond to the first few vibrations of the simple plate. However, should the pattern of the braces change, these diagrams will be modified significantly, so please don't take them too literally.

**Part 3: Coupling The String & The Plate**

To further develop your understanding of the sound of the guitar, you now have to consider what happens when you join the string to the top plate. Considered at its simplest level, this is what's called 'a system of couple vibrators', each with its own preferred modes of vibration. Of course, these are not free to oscillate in isolation (hence the word 'coupled') and each affects the other in complex ways. What's more, this coupling is not perfect, because the vibrations of the string are transmitted through a bridge that also responds to different frequencies in different ways. Ignoring the details of these interactions, it's possible to discuss the consequences of this coupling in qualitative terms.

Once you've completed the plucking motion, the plate absorbs energy from the string, thus sucking energy out of some of its modes of vibration. The plate then begins to vibrate at its own preferred frequencies. The vibrating plate then passes some energy back, exciting new modes in the string itself -- including modes that were not present in the original vibration. This means that, within a cycle or two, the triangular waveform of the string changes to a new shape. But this isn't the end of the matter, because the modified vibrations in the string no[![](http://media.soundonsound.com/sos/aug01/images/synth6s.gif)][6]w excite the plate in a new way. The plate then responds differently, exciting new modes, and affecting the string in yet another way... and so on, until all the energy in the system radiates away as sound waves.

If this seems too convoluted to analyse, it isn't. However, it is hellishly complex. In synthesis terms, you have an _oscillator_ (the string) whose output passes through a _resonator_ (the plate), the response of which affects the harmonic content of the oscillator itself. In principle, there's no reason why you shouldn't build a synth that does the same. But in practice... well, that's another matter.

**Part 4: The Hollow Body**

Now you have to consider what happens when you add the sides and base of the guitar to the top plate, thus producing an air cavity within a hollow body.

You should recall from part 22 of Synth Secrets (see _SOS_ February 2001 or [_www.soundonsound.com/sos/feb01/articles/synthsecrets.htm_][7]) that a hollow body will resonate at certain frequencies determined by its size and the shape of the cavity. However, the guitar is not as simple as the idealised room. This is because its body is not a perfect, rigid enclosure, and its vibrations are being 'driven' by the vibrations of the string and the top plate.

If, to simplify matters, I first treat the sides and back of the guitar as perfect, rigid enclosures, theory predicts that the air within the guitar body will have a 'comb' response at low frequencies. This is not unreasonable; at some frequencies, the air will flow out of the sound-hole in phase with the inward movement of the top plate, whereas at others, the two will be out of phase. This behaviour is analogous to that of a bass reflex loudspeaker.

However, guitars do not have perfect, immobile sides and backs, so a full analysis of the sound requires that I consider the vibration in each of these, too. The result of this shows that the back of the guitar introduces yet more resonances, as shown in Figure 8 (above right).

At this point, you might think that the guitar is complex enough, but I haven't even neared the end of my analysis. Consider this: when you pluck a string in a direction that is _perpendicular_ to the surface of the top plate, th[![](http://media.soundonsound.com/sos/aug01/images/synth7s.gif)][8]e forces transmitted through the bridge are trying to bend the body along its length. However, when you pluck the same string in a direction _parallel_ to the top plate, the string is trying to distort the body from side to side as well as bend it. If you look back to Figures 7(a) to 7(d), it should be obvious that the modes in Figures (a) and (c) are most likely to be excited by a perpendicular plucking action, whereas those in (b) and (d) will require some sideways component.

But what are the chances that you pluck a string in these precise directions? Virtually non-existent -- so you have up-down and side-to-side components in every note, each exciting different body resonances in different proportions.

**Part 5: Amplitude Response**

Everything I've discussed so far has described the mechanisms by which the guitar string generates the initial sound of the acoustic guitar, and the ways in which the body modifies the harmonic content of the waveforms thus produced. Until now, I've omitted any consideration of how the amplitude of the sound changes over time.

Perhaps surprisingly, it is possible to reduce the amplitude response of the acoustic guitar to a couple of simple generalisations, as follows: if you pluck a string parallel to the top plate, the amplitude of the resulting sound decays relatively slowly. If you pluck the same string perpendicular to the plate, the initial level is greater, but the sound decays more quickly. These can be depicted in simplified form as the amplitude envelopes shown in Figures 9(a) and 9(b).

Of course, you will rarely -- if ever -- pluck the string in exactly these fashions, so the true amplitude response will look more like that shown in Figure 10 (shown right). For any given initial displacement and plucking position, the height of the initial peak and the length of the final decay will then depend upon the angle at which you pluck.

**Part 6: Other Factors**

I wish I could say that this is all there is to the sound of an acoustic guitar, but I can't. Many other factors influence what you hear. For example, I haven't mentioned the sympathetic string resonances that occur when more than one string is free to vibrate at any given moment. The importance of this is something you can demonstrate for yourself. Find an acoustic guitar and damp five of the strings. Then pluck the free one, listening to the tone of the resulting note. Now release the five damped strings, and play the same note on the sixth. It's different, isn't it? The reason for this is simple: after a few cycles, each of the undamped strings will be oscillating at the modal frequencies it shares with the plucked string. This is because the vibration of the plucked string passes through the nut and the bridge to the other five, exciting vibrations in each of these.

However, you now have nine vibrating resonators (six strings, the top plate, the bottom plate and the air in the cavity) rather than four, so the body resonances are excited in different ways, with different ampl[![](http://media.soundonsound.com/sos/aug01/images/synth8_10s.gif)][9]itudes. Thinking of this in terms of synthesis, you could say that the introduction of the second oscillator changes the interaction of the first oscillator and the resonator. The introduction of the third changes the interactions of the first and the second and the resonator... and so on. Ouch!

Another problem lies in the fact that the strings are not perfect harmonic oscillators. This is because they do not form perfect angles at the nut or the bridge. The finite cross-section of the string ensures that it curves at these points, thus making its active length slightly shorter than the idealised view would suggest. The degree to which this happens depends upon the wavelength and amplitude of the vibration, so the string appears shorter at high frequencies and high amplitudes than it does at low frequencies and low amplitudes. This sharpens higher, louder harmonics, further complicating any analysis of the string's harmonic spectrum, as well as the guitar body's response to it.

Finally, you have to consider the radiated sound pattern of the acoustic guitar. Like all acoustic instruments, the frequency response and the harmonic content of notes differ from one listening position to another. Experiments show that the loudness of some frequencies can differ by as much as 20dB if you shift your listening position. Likewise, if guitarists shift their seating position, or the angle of their guitar, the same dramatic change can occur.

**Part 7: Synthesizing The Acoustic Guitar?**

At this point, you can start to consider how to patch an analogue synthesizer in order to produce an acoustic guitar sound. But if you don't know where to start, don't worry; neither does anybody else. Let's look at the problems:

![](http://media.soundonsound.com/images/regulars/bulbow.gif) Each string produces a different waveform depending upon the plucking position;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The shape and hardness of your fingers or the plectrum influences the high-frequency content of the initial waveform;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The amplitude envelope of the oscillators depends upon the direction in which you pluck the string(s);

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The strings' harmonics are 'stretched' as the pitch increases and/or the excitation increases in amplitude;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The six strings interact with each other in different ways, depending upon their pitches and the number of them which are free to vibrate at any given time;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) Each string interacts with a system of complex resonators (the guitar body) that absorbs energy and then directs it back to all the strings, exciting harmonics that may not be present in the initial waveform;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The body has many densely packed resonances and anti-resonances that can not be imitated using conventional equalisers or filters;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The nature of the resultant sound is extremely dependent on the position of the listener and the angle between the listener and the instrument.

There are other factors, but these eight give you a good idea why you can not create authentic-sounding acoustic guitar patches using analogue subtractive synthesis. This is one occasion when only digital technology will do! ![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/Aug01/articles/synthsecrets28.asp
[1]: http://media.soundonsound.com/sos/aug01/images/synth1_4.gif
[2]: http://media.soundonsound.com/sos/aug01/images/synth4.gif
[3]: www.soundonsound.com/sos/may99/articles/synthsec.htm
[4]: http://media.soundonsound.com/sos/aug01/images/synth5.gif
[5]: www.soundonsound.com/sos/jun99/articles/synthsecrets.htm
[6]: http://media.soundonsound.com/sos/aug01/images/synth6.gif
[7]: www.soundonsound.com/sos/feb01/articles/synthsecrets.htm
[8]: http://media.soundonsound.com/sos/aug01/images/synth7.gif
[9]: http://media.soundonsound.com/sos/aug01/images/synth8_10s.gif