# dragdrop-radar

A reusable, css customizable d3 radar graph widget that can be used to input values too.

See the [project homepage](http://DavideMontersino.github.io/dragdrop-radar).

Also, you can play with it on [JsFiddle](http://jsfiddle.net/oraxxio/8r86fyru/1/)

## Installation

Using Bower:

    bower install dragdrop-radar

Or grab the [source](https://github.com/DavideMontersino/dragdrop-radar/dist/dragdrop-radar.js) ([minified](https://github.com/DavideMontersino/dragdrop-radar/dist/dragdrop-radar.min.js)).

## Usage

Basic usage is as follows:

    <body>
        <div id="myRadar"></div>
        <script type="text/javascript">
            var myRadar = new dragdropRadar({
                element: "#myRadar",
                data: [
                    {value: 18, name: 'first'},
                    {value: 3, name: 'second'},
                    {value: 2, name: 'third'}]
                });
        </script>
    </body>

## Documentation

Start with `docs/MAIN.md`.

## Contributing

We'll check out your contribution if you:

* Provide a comprehensive suite of tests for your fork. (ehm, I did not write any test)
* Have a clear and documented rationale for your changes.
* Package these up in a pull request.

We'll do our best to help you out with any contribution issues you may have.

## License

MIT. See `LICENSE.txt` in this directory.
