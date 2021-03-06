const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAround) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    
    while(minesPlanted < minesAround){
        const rowSel = parseInt(Math.random() * rows, 10)
        const colSel = parseInt(Math.random() * columns, 10)
        
        if(!board[rowSel][colSel].mined){
            board[rowSel][colSel].mined = true;
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

const getVizinhos = (board, row, column) => {
    const vizinhos = [];
    const rows = [row -1, row, row + 1]
    const columns = [column - 1, columnc, column + 1]

    rows.forEach(r => {
        columns.forEach( c=> {
            const different = r!== rpw || c !== column
            const validRow = r>= 0 && r < board.length
            const validColumn = c>= 0 && c < board[0].length

            if(different && validRow && validColumn){
                vizinhos.push(board[r][c])
            }
        })
    })

    return vizinhos
}

const safeVizinhanca = (board, row, column) => {
    const safes = (result, vizinho) => result && !vizinho.mined
    return getVizinhos(board, row, column).reduce(safes, true)
}

const openField = (board, row, column) => {
    const field = board[row][column]
    if(!field.opened){
        field.opened = true
        if(field.mined){
           field.exploded = true 
        } else if (safeVizinhanca(board, row, column)) {
            getVizinhos(board, row, column)
                .forEach(n => {
                    openField(board, n.row, c.column)
                })
        } else {
            const vizinhos = getVizinhos(board, row, column)
            field.nearMines = vizinhos.filter(n => n.mined).length
        }
    }
}

const fields = board => [].concat(...board)

const hasExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0

const pendding = field => (field.mined && !field.flagged)
    || (!field.mined && !field.opened)

const wonGame = board => fields(board)
    .filter(pendding).length === 0

const showMines = board => fields(board)
    .filter(field => field.mined)
    .forEach(field => field.opened = true)

export { 
    createMinedBoard,
    cloneBoard,
    openField,
    hasExplosion,
    wonGame,
    showMines
 }