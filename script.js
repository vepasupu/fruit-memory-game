class FruitMemoryGame {
    constructor() {
        this.level = 1;
        this.score = 0;
        this.matches = 0;
        this.totalMatches = 0;
        this.flippedTiles = [];
        this.matchedPairs = [];
        this.isProcessing = false;
        
        // Fruit emojis for the game
        this.fruits = ['🍎', '🍌', '🍇', '🍊', '🍓', '🥝', '🍑', '🥭', '🍍', '🥥', '🍒', '🍑'];
        
        this.gameBoard = document.getElementById('game-board');
        this.levelElement = document.getElementById('level');
        this.scoreElement = document.getElementById('score');
        this.matchesElement = document.getElementById('matches');
        this.totalMatchesElement = document.getElementById('total-matches');
        this.levelCompleteModal = document.getElementById('level-complete');
        this.finalScoreElement = document.getElementById('final-score');
        
        this.initializeEventListeners();
        this.startLevel();
    }
    
    initializeEventListeners() {
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartLevel();
        });
        
        document.getElementById('continue-btn').addEventListener('click', () => {
            this.nextLevel();
        });
        
        document.getElementById('next-level-btn').addEventListener('click', () => {
            this.nextLevel();
        });
    }
    
    startLevel() {
        this.matches = 0;
        this.flippedTiles = [];
        this.matchedPairs = [];
        this.isProcessing = false;
        
        // Calculate grid size based on level
        const gridSize = this.getGridSize();
        this.totalMatches = (gridSize * gridSize) / 2;
        
        this.updateUI();
        this.createGameBoard(gridSize);
    }
    
    getGridSize() {
        // Start with 4x4, increase every 3 levels
        const baseSize = 4;
        const increment = Math.floor((this.level - 1) / 3);
        return Math.min(baseSize + increment, 6); // Cap at 6x6
    }
    
    createGameBoard(gridSize) {
        this.gameBoard.innerHTML = '';
        this.gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        
        // Select fruits for this level
        const numPairs = (gridSize * gridSize) / 2;
        const selectedFruits = this.fruits.slice(0, numPairs);
        
        // Create pairs and shuffle
        const gameCards = [...selectedFruits, ...selectedFruits];
        this.shuffleArray(gameCards);
        
        // Create tiles
        gameCards.forEach((fruit, index) => {
            const tile = this.createTile(fruit, index);
            this.gameBoard.appendChild(tile);
        });
    }
    
    createTile(fruit, index) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.fruit = fruit;
        tile.dataset.index = index;
        
        // Tile back (hidden state)
        const tileBack = document.createElement('div');
        tileBack.className = 'tile-back';
        tileBack.textContent = '?';
        
        // Tile front (revealed state)
        const tileFront = document.createElement('div');
        tileFront.className = 'tile-front';
        tileFront.textContent = fruit;
        
        tile.appendChild(tileBack);
        tile.appendChild(tileFront);
        
        tile.addEventListener('click', () => this.handleTileClick(tile));
        
        return tile;
    }
    
    handleTileClick(tile) {
        // Prevent clicks during processing or on already flipped/matched tiles
        if (this.isProcessing || 
            tile.classList.contains('flipped') || 
            tile.classList.contains('matched') || 
            this.flippedTiles.length >= 2) {
            return;
        }
        
        // Flip the tile
        tile.classList.add('flipped');
        this.flippedTiles.push(tile);
        
        // Check if we have two flipped tiles
        if (this.flippedTiles.length === 2) {
            this.isProcessing = true;
            setTimeout(() => this.checkMatch(), 800);
        }
    }
    
    checkMatch() {
        const [tile1, tile2] = this.flippedTiles;
        const fruit1 = tile1.dataset.fruit;
        const fruit2 = tile2.dataset.fruit;
        
        if (fruit1 === fruit2) {
            // Match found!
            tile1.classList.add('matched');
            tile2.classList.add('matched');
            tile1.classList.remove('flipped');
            tile2.classList.remove('flipped');
            
            this.matches++;
            this.score += 100 * this.level; // Higher points for higher levels
            this.matchedPairs.push(tile1, tile2);
            
            this.updateUI();
            
            // Check if level is complete
            if (this.matches === this.totalMatches) {
                setTimeout(() => this.levelComplete(), 500);
            }
        } else {
            // No match - flip back
            tile1.classList.add('wrong');
            tile2.classList.add('wrong');
            
            setTimeout(() => {
                tile1.classList.remove('flipped', 'wrong');
                tile2.classList.remove('flipped', 'wrong');
            }, 1000);
        }
        
        // Reset for next turn
        this.flippedTiles = [];
        this.isProcessing = false;
    }
    
    levelComplete() {
        // Bonus points for completing level
        this.score += 500 * this.level;
        this.updateUI();
        
        this.finalScoreElement.textContent = this.score;
        this.levelCompleteModal.style.display = 'flex';
    }
    
    nextLevel() {
        this.level++;
        this.levelCompleteModal.style.display = 'none';
        this.startLevel();
    }
    
    restartLevel() {
        this.score = Math.max(0, this.score - 50); // Small penalty for restart
        this.startLevel();
    }
    
    updateUI() {
        this.levelElement.textContent = this.level;
        this.scoreElement.textContent = this.score;
        this.matchesElement.textContent = this.matches;
        this.totalMatchesElement.textContent = this.totalMatches;
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FruitMemoryGame();
});
